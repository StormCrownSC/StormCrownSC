<?php
    session_start();
    $title = 'registration';
    require "assets/blocks/header.php";
?>

<div class="login_block">
    <div class="container_login">
        <form action="assets/blocks/registration_check.php" method="post">
            <div class="login_main_text">Регистрация</div>
            <div class="error"><?php if(array_key_exists( 'registration_free', $_SESSION)){ echo "Заполните все поля"; unset($_SESSION["registration_free"]);}
                elseif (array_key_exists( 'error_passwords', $_SESSION)){ echo "Пароли не совпадают"; unset($_SESSION["error_passwords"]);} ?></div>
            <div class="login_text">Введите электронную почту</div>
            <input class="login_inp" type="email" name="email" value="<?php if(array_key_exists( 'registration_email', $_SESSION))  echo $_SESSION["registration_email"]; else echo ""; ?>">
            <div class="login_text">Введите логин</div>
            <input class="login_inp" type="text" name="login" value="<?php if(array_key_exists( 'registration_login', $_SESSION)) echo $_SESSION["registration_login"];  else echo ""; ?>">
            <div class="login_text">Пароль</div>
            <input class="password_inp" type="password" name="password">
            <div class="login_text">Подтвердите пароль</div>
            <input class="password_inp" type="password" name="double_password"><br>
            <button type="submit" id="enter">Зарегистрироваться</button>
        </form>
    </div>
</div>

<?php
    require "assets/blocks/footer.php";
?>
