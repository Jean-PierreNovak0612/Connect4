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
        <section class="w-75 mx-auto text-center my-5 plysoptions px-5">

            <!-- The name of the application and game -->
            <h1 class="w-100">Player options</h1>

            <!-- This section will contain the menu options -->
            <section class="mt-5 pt-5 me-5 w-50 d-inline-block text-start">

                <!-- Creating the options field for the first player -->
                <label for="ply1name" class="form-label" required='required'>Enter name for player 1:</label>
                <input type="text" class="form-control">

                <!-- Creating color selection palet -->
                <h4 class="text-start w-100 mt-5 mb-2">Select your chip color:</h4>
                <section class="p-3 mt-3"> 
                    <button class="color1 rounded-circle btn blue mx-1 my-1" value="blue"></button>
                    <button  class="color1 rounded-circle btn active1 red mx-1 my-1" value="red"></button>
                    <button class="color1 rounded-circle btn green mx-1 my-1" value="green"></button>
                </section>

            </section>
            
        </section>

        <!-- Button that allowes to start the game only when both players are ready -->
        <button id="startmultiply" class="multiplay btn mt-5 border-3 border-dark rounded-pill py-2 px-5 mb-5 btn-success">Start game!</button>
    </main>
</body>
<script src="../assets/js/transition.js"></script>
<script src="../assets/js/readyState.js"></script>
<script src="../assets/js/colorSelection.js"></script>
<script src="../assets/js/setPlayerToGoFirst.js"></script>
</html>