<?php
// Kontaktformular-Versand für all-inkl (PHP). Wird von src/components/ContactForm.tsx aufgerufen.

$to = 'bruchwalski@medienproduktionbruchwalski.de';
// Absender muss ein existierendes Postfach der eigenen Domain sein,
// sonst verwirft der Mailserver die Nachricht.
$from = 'bruchwalski@medienproduktionbruchwalski.de';

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

$subject = '=?UTF-8?B?' . base64_encode("Website-Anfrage: $betreff") . '?=';
$body = "Name: $name\nE-Mail: $email\nWunschdatum: " . ($datum ?: '-') . "\nLeistung: $betreff\nGefunden über: " . ($quelle ?: '-') . "\n\n$nachricht\n";
$fromName = '=?UTF-8?B?' . base64_encode('Website Medienproduktion Bruchwalski') . '?=';
$headers = "From: $fromName <$from>\r\nReply-To: $email\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n";

// -f setzt den Envelope-Absender (Return-Path), wichtig für die Zustellung
$ok = mail($to, $subject, $body, $headers, '-f' . $from);
http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);
