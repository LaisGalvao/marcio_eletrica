<?php

$name = "Undefined name";

if(isset($_POST['name'])){
    $name = $_POST['name'];
}

$message = "<p>Hi!</p>";
$message .= "<p>TEEEEEEESSSSST $name</p>";

$to_email = 'laisgbueno62@gmail.com';
$subject = 'Mail subject';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Laís Galvão <laisgbueno62@gmail.com>';

mail($to_email, $subject, $message, implode("\r\n", $headers));
