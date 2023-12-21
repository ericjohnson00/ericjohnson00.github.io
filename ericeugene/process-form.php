<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate the form data (e.g. check for empty fields, valid email address)

  // Send the email
  $to = "booda501@gmail.com";
  $subject = "New message from website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  mail($to, $subject, $body);

  // Redirect the user to a thank-you page
  header("Location: thankyou.html");
}
?>
