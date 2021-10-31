<?php
    session_start();
    $title = 'login';
    require "assets/blocks/header.php";
?>

<div class="login_block">
    <div class="container_login">
        <form action="assets/blocks/login_check.php" method="post">
            <div class="login_main_text">Войти</div>
            <div class="error"><?php if(array_key_exists( 'login_error', $_SESSION)){ echo "Неверный логин или пароль"; unset($_SESSION["login_error"]); }
                elseif(array_key_exists( 'login_free', $_SESSION)){ echo "Введите логин и пароль"; unset($_SESSION["login_free"]);} ?></div>
            <div class="login_text">Логин или электронная почта</div>
            <input class="login_inp" type="text" name="login" value="<?php if(array_key_exists( 'login_name', $_SESSION)) echo $_SESSION["login_name"]; else echo ""; ?>">
            <div class="login_text">Пароль</div>
            <input class="password_inp" type="password" name="password"><br>
            <button type="submit" id="enter">Войти</button>
            <div class="login_bottom">
                <a id="registration" href="registration.php">Зарегистрироваться</a>
                <!-- <a id="forgot">Забыли пароль</a> -->
            </div>
        </form>
    </div>
</div>

<?php
require "assets/blocks/footer.php";
?>
