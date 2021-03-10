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
    <section class="w-100 text-center mt-5 mb-3">
        <h3>It is <span></span>'s turn</h3>
    </section>
    <section class="w-100">
        <table class="w-50 mx-auto border border-3 border-dark">
            <?php for($i=0; $i<6; $i++) : ?>
                <tr>
                    <?php for($j=0; $j<7; $j++) : ?>
                        <td class="text-center p-2">
                            <button id="<?php echo $i; echo $j; ?>" class="btn enterChip rounded-circle border-3 border-dark"></button>
                        </td>
                    <?php endfor ?>
                </tr>
            <?php endfor ?>
        </table>
    </section>
    
</body>
</html>