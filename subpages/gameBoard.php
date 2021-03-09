<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include_once '../inc/header.php';
    ?>
    <title>Document</title>
    <link rel="stylesheet" href="../assets/css/gameboard.css">
</head>
<body>
    <section class="w-100 text-center my-5">
        <h3>It is <span></span>'s turn</h3>
    </section>
    <section class="w-100">
        <table class="w-75 mx-auto border border-3 border-dark">
            <?php for($i=0; $i<6; $i++) : ?>
                <tr>
                    <?php for($j=0; $j<7; $j++) : ?>
                        <th class="text-center">
                            <button id="<?php echo $i; echo $j; ?>" class="btn enterChip rounded-circle border-3 border-dark"></button>
                        </th>
                    <?php endfor ?>
                </tr>
            <?php endfor ?>
        </table>
    </section>
    
</body>
</html>