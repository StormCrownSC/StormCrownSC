<?php
    session_start();
    if($_POST["email"] == "" or $_POST["login"] == "" or $_POST["password"] == "" or $_POST["double_password"] == "") {
        $_SESSION["registration_free"] = "";
        header('Location: ../../registration.php');
        exit;
    }
    if ($_POST["password"] != $_POST["double_password"]){
        $_SESSION["error_passwords"] = "";
        $_SESSION["registration_email"] = $_POST["email"];
        $_SESSION["registration_login"] = $_POST["login"];

        header('Location: ../../registration.php');
        exit;
    }
    header('Location: ../../login.php');
    exit;

