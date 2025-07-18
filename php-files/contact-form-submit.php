<?php

if(isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $recipient = "hi@shamilagovic.nl";
    $subject = "Bericht van klant (Contactformulier)";
    $content = "Van: $name \n \n Bericht: $message";
    $mailheader = $email;

    echo "<br><br><h4>I got your message!</h4><br><br>";
    echo "<h5>You'll hear from me soon.</h5>";

    mail($recipient, $subject, $content, $mailheader);

} else {

    echo "<br><br><h3>An error has occured</h3><br><br>";
    echo "<h5 style='text-align:center;'>Please try again later.</h5>";
    
    $destination = "hi@shamilagovic.nl";
    $root = "hosting:draftex";
    $log = "Error / Foutmelding - Contact Formulier";
    $error = "POST Error - _POST krijgt geen gegevens binnen bij form.submit(); [Mogelijke Fout: Syntax, Depreciatie, Overbelasting, .htacces]";

    mail($destination, $log, $error, $root);
}

?>


<link rel="stylesheet" href="../assets/css/styles.css">