<?php
// send.php - Tattoo Studio Work-Ink Contact & Booking Form Mailer
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Methode nicht erlaubt. Bitte nutze POST.'
    ]);
    exit();
}

// Recipient Email Address
$recipientEmail = 'gregorbielawa@gmail.com';

// Get JSON input or standard POST data
$inputData = json_decode(file_get_contents('php://input'), true);
if (!$inputData) {
    $inputData = $_POST;
}

// Extract and sanitize input fields
$name      = isset($inputData['name']) ? trim(filter_var($inputData['name'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';
$phone     = isset($inputData['phone']) ? trim(filter_var($inputData['phone'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';
$email     = isset($inputData['email']) ? trim(filter_var($inputData['email'], FILTER_SANITIZE_EMAIL)) : '';
$style     = isset($inputData['style']) ? trim(filter_var($inputData['style'], FILTER_SANITIZE_SPECIAL_CHARS)) : 'Fineline';
$placement = isset($inputData['placement']) ? trim(filter_var($inputData['placement'], FILTER_SANITIZE_SPECIAL_CHARS)) : 'Nicht angegeben';
$idea      = isset($inputData['idea']) ? trim(filter_var($inputData['idea'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';

// Validation: Required fields
if (empty($name) || empty($phone) || empty($idea)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Bitte fülle alle Pflichtfelder (Name, Telefonnummer, Tattoo-Idee) aus.'
    ]);
    exit();
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Ungültige E-Mail-Adresse.'
    ]);
    exit();
}

// Compose Email Subject & Body
$subject = '=?UTF-8?B?' . base64_encode('Neue Tattoo-Buchungsanfrage von ' . $name) . '?=';

$body = "Neue Tattoo-Buchungsanfrage über die Website work-ink-tattoo.de\n";
$body .= "---------------------------------------------------------\n\n";
$body .= "Name:               " . $name . "\n";
$body .= "Telefon / WhatsApp: " . $phone . "\n";
$body .= "E-Mail:             " . (!empty($email) ? $email : 'Nicht angegeben') . "\n";
$body .= "Wunschstil:         " . $style . "\n";
$body .= "Körperstelle/Größe: " . $placement . "\n\n";
$body .= "Tattoo Idee & Beschreibung:\n";
$body .= "---------------------------------------------------------\n";
$body .= $idea . "\n\n";
$body .= "---------------------------------------------------------\n";
$body .= "Gesendet am: " . date('d.m.Y H:i:s') . "\n";

// Email Headers
$domain = !empty($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) : 'work-ink-tattoo.de';
$fromAddress = 'noreply@' . $domain;

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8; format=flowed';
$headers[] = 'From: Work Ink Tattoo Website <' . $fromAddress . '>';

if (!empty($email)) {
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
}

// Send Mail
$mailSent = @mail($recipientEmail, $subject, $body, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Deine Buchungsanfrage wurde erfolgreich versendet.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Beim Versenden der E-Mail ist ein Fehler aufgetreten. Bitte versuche es später erneut oder rufe direkt an.'
    ]);
}
