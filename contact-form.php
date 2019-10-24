<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $website = $_POST['website'];

  $email_from = 'info@menat107.co.uk';

  $email_subject = "Website Form Submission";

  $email_body = "Name: $name\n".
                "Email: $visitor_email\n".
                "Message: $message\n";

  $to = "info@menat107.co.uk";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  if (!empty($website) || $name == "" || $visitor_email == "" || $message == "" || $name == " " || $visitor_email == " " || $message == " ") {
    header("Location: contact.html");
  } else {
    mail($to,$email_subject,$email_body,$headers);
  }


  header("Location: contact.html");
?>
