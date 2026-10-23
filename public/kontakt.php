<?php
// Kontaktformular-Versand für all-inkl (PHP). Wird von src/components/ContactForm.tsx aufgerufen.
// Versand per SMTP mit Anmeldung am Postfach. Die Zugangsdaten schreibt das Deployment
// aus den GitHub-Secrets nach kontakt-config.php (nicht im Repository).

$to = 'bruchwalski@medienproduktionbruchwalski.de';
// Absender muss das Postfach sein, an dem sich der SMTP-Versand anmeldet.
$from = 'website@medienproduktionbruchwalski.de';
$fromName = 'Website Medienproduktion Bruchwalski';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

// Honeypot: Bots füllen das versteckte Feld aus
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$clean = fn($v) => trim(str_replace(["\r", "\n"], ' ', (string)($v ?? '')));
$name = $clean($_POST['name'] ?? '');
$email = $clean($_POST['email'] ?? '');
$datum = $clean($_POST['datum'] ?? '');
$betreff = $clean($_POST['betreff'] ?? 'Anfrage');
$quelle = $clean($_POST['quelle'] ?? '');
$nachricht = trim((string)($_POST['nachricht'] ?? ''));

if ($name === '' || $nachricht === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['datenschutz'])) {
    http_response_code(422);
    echo json_encode(['ok' => false]);
    exit;
}

$subject = "Website-Anfrage: $betreff";
$body = "Name: $name\nE-Mail: $email\nWunschdatum: " . ($datum ?: '-') . "\nLeistung: $betreff\nGefunden über: " . ($quelle ?: '-') . "\n\n$nachricht\n";

$encode = fn($s) => '=?UTF-8?B?' . base64_encode($s) . '?=';
$headers = [
    'Date: ' . date('r'),
    'From: ' . $encode($fromName) . " <$from>",
    "To: <$to>",
    "Reply-To: <$email>",
    'Subject: ' . $encode($subject),
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@medienproduktionbruchwalski.de>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];

$configFile = __DIR__ . '/kontakt-config.php';
if (is_file($configFile)) {
    $ok = smtp_send(require $configFile, $from, $to, implode("\r\n", $headers), chunk_split(base64_encode($body)));
} else {
    // Fallback ohne SMTP-Zugangsdaten
    $mailHeaders = implode("\r\n", array_filter($headers, fn($h) => !preg_match('/^(To|Subject|Date|Message-ID):/', $h)));
    $ok = mail($to, $encode($subject), chunk_split(base64_encode($body)), $mailHeaders, '-f' . $from);
}

http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);

function smtp_send(array $cfg, string $from, string $to, string $headers, string $body): bool
{
    $fp = @stream_socket_client("ssl://{$cfg['host']}:465", $errno, $errstr, 15);
    if (!$fp) {
        error_log("SMTP-Verbindung fehlgeschlagen: $errstr ($errno)");
        return false;
    }
    stream_set_timeout($fp, 15);

    $expect = function (?string $command, array $codes) use ($fp): void {
        if ($command !== null) {
            fwrite($fp, $command . "\r\n");
        }
        $reply = '';
        while (($line = fgets($fp, 515)) !== false) {
            $reply .= $line;
            if (!isset($line[3]) || $line[3] === ' ') {
                break;
            }
        }
        if (!in_array((int)substr($reply, 0, 3), $codes, true)) {
            throw new RuntimeException(trim($reply) ?: 'keine Antwort');
        }
    };

    try {
        $expect(null, [220]);
        $expect('EHLO medienproduktionbruchwalski.de', [250]);
        $expect('AUTH LOGIN', [334]);
        $expect(base64_encode($cfg['user']), [334]);
        $expect(base64_encode($cfg['pass']), [235]);
        $expect("MAIL FROM:<$from>", [250]);
        $expect("RCPT TO:<$to>", [250, 251]);
        $expect('DATA', [354]);
        // Punkt am Zeilenanfang verdoppeln (SMTP-Dot-Stuffing)
        $message = preg_replace('/^\./m', '..', $headers . "\r\n\r\n" . $body);
        $expect($message . "\r\n.", [250]);
        $expect('QUIT', [221]);
    } catch (Throwable $e) {
        error_log('SMTP-Fehler: ' . $e->getMessage());
        fclose($fp);
        return false;
    }
    fclose($fp);
    return true;
}
