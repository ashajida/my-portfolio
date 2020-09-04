<?php

if(isset($_POST['submit'])) {

    define('EMAIL', 'galaxymusic10@gmail.com');
    $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
    $msg  = filter_var($_POST['message_body'],FILTER_SANITIZE_STRING);

    mail(EMAIL, $email, $msg);

   
}

