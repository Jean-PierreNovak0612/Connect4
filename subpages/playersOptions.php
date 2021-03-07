<!DOCTYPE html>
<html lang="en">
<head>
    <?php

        // Including the header file
        include_once "../inc/header.php";

    ?>
    <title>Document</title>
</head>

<!-- This page is manly here to switch between templates -->
<body class="container-fluid">
    <main class="text-center">

        
        <!-- This is the code for the players options menu -->
        <section class="w-75 mx-auto text-center my-5 plysoptions px-5">

            <!-- The name of the application and game -->
            <h1 class="w-100">Players options</h1>

            <!-- Selecting who goes first -->
            <section class="firstTurn w-100 py-2 mt-3">
                <button class="btn ply1 w-25 goesFirst">Player1</button>
                <button class="btn ply2 w-25">Player2</button>
            </section>

            <!-- This section will contain the menu options -->
            <section class="mt-5 pt-5 me-5 w-25 d-inline-block text-start">

                <!-- Creating the options field for the first player -->
                <label for="ply1name" class="form-label">Enter name for player 1:</label>
                <input type="text" class="form-control">

                <!-- Creating color selection palet -->
                <h4 class="text-start w-100 mt-5 mb-2">Select your chip color:</h4>
                <section class="p-3 mt-3"> 
                    <button id="blue" class="color1 rounded-circle btn"></button>
                    <button id="red" class="color1 rounded-circle btn active1"></button>
                    <button id="yellow" class="color1 rounded-circle btn "></button>
                    <button id="green" class="color1 rounded-circle btn "></button>
                </section>

                <!-- Setting the ready button -->
                <button id="ply1Ready" class="btn-danger ready btn border-3 border-dark rounded-pill py-2 px-5 mx-3 mt-3">Not ready!</button>

            </section>

            <section class="mt-5 pt-5 w-25 ms-5 d-inline-block text-start">

                <!-- Creating the options field for the first player -->
                <label for="ply1name" class="form-label">Enter name for player 2:</label>
                <input type="text" class="form-control">

                <!-- Creating color selection palet -->
                <h4 class="text-start w-100 mt-5 mb-2">Select your chip color:</h4>
                <section class="p-3 mt-3"> 
                    <button id="blue" class="color2 rounded-circle btn "></button>
                    <button id="red" class="color2 rounded-circle btn "></button>
                    <button id="yellow" class="color2 rounded-circle btn active2"></button>
                    <button id="green" class="color2 rounded-circle btn "></button>
                </section>

                <!-- Setting the ready button -->
                <button id="ply2Ready" class="btn-danger ready btn border-3 border-dark rounded-pill py-2 px-5 mx-3 mt-3">Not ready!</button>

            </section>
            
        </section>

        <!-- Button that allowes to start the game only when both players are ready -->
        <button id="startmultiply" class="multiplay btn mt-5 border-3 border-dark rounded-pill py-2 px-5" disabled>Start game!</button>
    </main>
</body>
<script src="../assets/js/transition.js"></script>
<script src="../assets/js/readyState.js"></script>
</html>