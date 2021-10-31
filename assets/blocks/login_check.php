<?php
    session_start();
    if($_POST["login"] == "" or $_POST["password"] == "") {
        $_SESSION["login_free"] = "";
        $_SESSION["login"] = $_POST["login"];
        header('Location: ../../login.php');
        exit;
    }
    $_SESSION["login_name"] = $_POST["login"];
    header('Location: ../../login.php');
    exit;

