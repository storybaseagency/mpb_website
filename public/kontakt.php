<?php
// Kontaktformular-Versand für all-inkl (PHP). Wird von src/components/ContactForm.tsx aufgerufen.

// PLATZHALTER: Empfänger-Adresse eintragen
$to = 'PLATZHALTER@medienproduktionbruchwalski.de';
// Absender muss eine Adresse der eigenen Domain sein (sonst landet die Mail im Spam)
$from = 'website@medienproduktionbruchwalski.de';

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
$nachricht = trim((string)($_POST['nachricht'] ?? ''));

if ($name === '' || $nachricht === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['datenschutz'])) {
    http_response_code(422);
    echo json_encode(['ok' => false]);
    exit;
}

$subject = '=?UTF-8?B?' . base64_encode("Website-Anfrage: $betreff") . '?=';
$body = "Name: $name\nE-Mail: $email\nWunschdatum: " . ($datum ?: '-') . "\nLeistung: $betreff\n\n$nachricht\n";
$headers = "From: $from\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$ok = mail($to, $subject, $body, $headers);
http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);
