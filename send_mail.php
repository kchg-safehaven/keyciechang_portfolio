<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // si tu utilises Composer
// require 'src/PHPMailer.php'; // si tu l’as téléchargé manuellement
// require 'src/SMTP.php';
// require 'src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email   = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Tous les champs sont requis.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Email invalide.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kwork.chang@gmail.com'; // ✅ Ton adresse Gmail
        $mail->Password   = 'mot-de-passe-ou-mdp-app'; // ✅ Mot de passe ou mot de passe d'application
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Expéditeur / Destinataire
        $mail->setFrom($email, $name); // L'expéditeur (l'utilisateur)
        $mail->addAddress('kwork.chang@gmail.com', 'Toi'); // ✅ Toi, le destinataire

        // Contenu
        $mail->isHTML(false);
        $mail->Subject = "Message de $name";
        $mail->Body    = "Nom: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Message envoyé avec succès.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Erreur : " . $mail->ErrorInfo;
    }
} else {
    http_response_code(403);
    echo "Méthode non autorisée.";
}
