<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color: red;'>Invalid email format</p>";
        exit;
    }

    $to = "upnaturebirdfestival@gmail.com"; // Change to your email
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_body = "You have received a new message from $name.\n\n";
	$email_body .= "Name: $name\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "<p style='color: green;'>Your message has been sent successfully!</p>";
    } else {
        echo "<p style='color: red;'>Message sending failed. Please try again.</p>";
    }
} else {
    echo "<p style='color: red;'>Invalid request</p>";
}
?>
