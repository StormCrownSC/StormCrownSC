<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Сироткин Денис">
    <meta name="description" content="Личный сайт">
    <meta name="keywords" content="programm,programming,html,css,js,nodejs,python,c++,программирование,программист,код">
    <link rel="stylesheet" href="/assets/css/style.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js" type="text/javascript"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
    <title><?=$title?></title>
</head>
<body>
<header class="header">
    <a class="logo_header" href="index.php">StormCrown</a>
    <a class="login_href" href="login.php"><?php if(array_key_exists( 'login_name', $_SESSION)) echo $_SESSION["login_name"]; else echo "Войти"?></a>
</header>