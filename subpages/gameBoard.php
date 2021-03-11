<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include_once '../inc/header.php';
    ?>
    <title>Document</title>
    <link rel="stylesheet" href="../assets/css/gameboard.css">
    <link rel="stylesheet" href="../assets/css/chipPlacementColor.css">
</head>
<body>
    <section class="w-100 text-center mt-5 mb-3 gameboard">
        <h3>It is <span id="curPly"></span>'s turn</h3>
    </section>
    <section class="w-100 gameboard">
        <table class="w-50 mx-auto border border-3 border-dark">
            <?php for($i=0; $i<6; $i++) : ?>
                <tr>
                    <?php for($j=0; $j<7; $j++) : ?>
                        <td class="text-center p-2">
                            <button id="<?php echo $i; echo $j; ?>" class="btn enterChip rounded-circle" value='0'></button>
                        </td>
                    <?php endfor ?>
                </tr>
            <?php endfor ?>
        </table>
    </section>
    <section class="w-50 mx-auto text-center mt-5 border border-3 border-dark rounded-3 p-5 wpannel" style="display: none">
        <h1><span id="winner"></span> has won!</h1>
        <button class="retry btn btn-success rounded-pill py-2 px-5 mt-5 mx-auto d-block">Replay</button>
        <button class="mainMenu btn btn-success rounded-pill py-2 px-5 mt-5 mx-auto d-block">Return to menu</button>
    </section>
    <?php if(isset($_GET['single'])) : ?>
        <script src="../assets/js/functions/singleplayer.js"></script>
        <script src="../assets/js/chipPlacement.js"></script>
    <?php else : ?>
    <?php endif ?>
    <script src="../assets/js/wpannelButtons.js"></script>
</body>
</html>