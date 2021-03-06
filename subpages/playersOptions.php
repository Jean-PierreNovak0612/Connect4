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
    <main>
            <!-- This is the code for the players options menu -->
            <section class="w-75 mx-auto text-center my-5 plysoptions px-5">

                <!-- The name of the application and game -->
                <h1 class="w-100">Players options</h1>

                <!-- This section will contain the menu options -->
                <section class="mt-5 pt-5 me-5 w-25 d-inline-block text-start">

                    <!-- Creating the options field for the first player -->
                    <label for="ply1name" class="form-label">Enter name for player 1:</label>
                    <input type="text" class="form-control">

                </section>

                <section class="mt-5 pt-5 w-25 ms-5 d-inline-block text-start">

                    <!-- Creating the options field for the first player -->
                    <label for="ply1name" class="form-label">Enter name for player 1:</label>
                    <input type="text" class="form-control">

                </section>
                
            </section>
    </main>
</body>
<script src="assets/js/transition.js"></script>
</html>