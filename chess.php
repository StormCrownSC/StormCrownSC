<?php
session_start();
$title = 'chess';
require "assets/blocks/header.php";
?>

<main>
    <div class="chess_block">
        <div class="container_chess">
        </div>
    </div>
    <div class="menu_chess">
        <div class="container_menu">
            <button class="reverse" onclick="reverse();"><img height="40px" width="40px" src="/assets/images/reverse.png"></button>
            <button class="left-left"><img height="40px" width="40px" src="/assets/images/left-left.png"></button>
            <button class="left"><img height="40px" width="40px" src="/assets/images/left.png"></button>
            <button class="right"><img height="40px" width="40px" src="/assets/images/right.png"></button>
            <button class="right-right"><img height="40px" width="40px" src="/assets/images/right-right.png"></button>
        </div>
    </div>
</main>
<script language="JavaScript" type="text/javascript" src="/assets/js/chess_table.js"></script>


<?php
    require "assets/blocks/footer.php";
?>
