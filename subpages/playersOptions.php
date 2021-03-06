<!DOCTYPE html>
<html lang="en">
<head>
    <?php

        // Including the header file
        include_once "../inc/header.php";

    ?>
    <link rel="stylesheet" href="../assets/css/colors.css">
    <link rel="stylesheet" href="../assets/css/whoGoesFirst.css">
    <title>Players menu</title>
</head>

<!-- This page is manly here to switch between templates -->
<body class="container-fluid">
    <main class="text-center">

        
        <!-- This is the code for the players options menu -->
        <section class="w-75 mx-auto text-center my-3 plysoptions px-5">

            <?php if(isset($_GET['multy'])) : ?>
                <!-- Selecting who goes first -->
                <section class="firstTurn w-100 py-2 mt-1">
                    <h3 class="plyGoesFirst">Select who goes first</h3>
                    <button id="ply1" class="btn selectWhoGoesFirst w-25 goesFirst">Player1</button>
                    <button id="ply2" class="btn selectWhoGoesFirst w-25">Player2</button>
                </section>
            <?php endif ?>

            <?php if(isset($_GET['multy'])) : ?>
                <!-- This section will contain the menu options -->
                <section class="mt-1 pt-5 me-5 w-25 d-inline-block text-start">
            <?php else : ?>
                <!-- This section will contain the menu options -->
                <section class="mt-5 me-5 w-50 d-inline-block text-start">
            <?php endif ?>

                <!-- Creating the options field for the first player -->
                <label for="ply1name" class="form-label" required='required'>Enter name for player 1:</label>
                <input type="text" class="form-control name1">

                <!-- Creating color selection palet -->
                <h4 class="text-start w-100 mt-5 mb-2">Select your chip color:</h4>
                <section class="p-3 mt-3"> 
                    <button class="color1 rounded-circle btn blue mx-1 my-1" value="blue"></button>
                    <button  class="color1 rounded-circle btn active1 red mx-1 my-1" value="red"></button>
                    <?php if(isset($_GET['multy'])) : ?>
                        <button class="color1 rounded-circle btn yellow mx-1 my-1" disabled value="yellow"></button>
                    <?php endif ?>
                    <button class="color1 rounded-circle btn green mx-1 my-1" value="green"></button>
                </section>

                <?php if(isset($_GET['multy'])) : ?>
                    <!-- Setting the ready button -->
                    <button id="ply1Ready" class="btn-danger ready btn border-3 border-dark rounded-pill py-2 px-5 mx-3 mt-3" disabled>Not ready!</button>
                <?php endif ?>

            </section>

            <?php if(isset($_GET['multy'])) : ?>
                <section class="mt-1 w-25 ms-5 d-inline-block text-start">

                    <!-- Creating the options field for the first player -->
                    <label for="ply2name" class="form-label">Enter name for player 2:</label>
                    <input type="text" class="form-control name2">

                    <!-- Creating color selection palet -->
                    <h4 class="text-start w-100 mt-5 mb-2">Select your chip color:</h4>
                    <section class="p-3 mt-3"> 
                        <button class="color2 rounded-circle btn blue mx-1 my-1" value="blue"></button>
                        <button class="color2 rounded-circle btn red mx-1 my-1" disabled value="red"></button>
                        <button class="color2 rounded-circle btn active2 yellow mx-1 my-1" value="yellow"></button>
                        <button class="color2 rounded-circle btn green mx-1 my-1" value="green"></button>
                    </section>

                    <!-- Setting the ready button -->
                    <button id="ply2Ready" class="btn-danger ready btn border-3 border-dark rounded-pill py-2 px-5 mx-3 mt-3" disabled>Not ready!</button>

                </section>
            
            <?php endif ?>
            
        </section>

        <?php if(isset($_GET['multy'])) : ?>
            <!-- Button that allowes to start the game only when both players are ready -->
            <button id="startmultiply" class="multiplay btn border-3 border-dark rounded-pill py-2 px-5 mb-5 btn-danger" disabled>Start game!</button>
        <?php else : ?>
            <!-- Button that allowes to start the game only when both players are ready -->
            <button id="startsingleply" class="singleplay btn border-3 border-dark rounded-pill py-2 px-5 mb-5 btn-danger" disabled>Start game!</button>
        <?php endif ?>
    </main>
</body>
<script src="../assets/js/transition.js"></script>
<script src="../assets/js/readyState.js"></script>
<script src="../assets/js/colorSelection.js"></script>
<script src="../assets/js/setPlayerToGoFirst.js"></script>
<script src="../assets/js/enterPlayerName.js"></script>
</html>