<?php

    // Defining the variable that will allow us to load the other files
    define("__CONFIG__", true);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php

        // Including the header file
        include_once "inc/header.php";

    ?>
    <title>Document</title>
</head>

<!-- This page is manly here to switch between templates -->
<body class="container-fluid">
    <main>
            <!-- This is the code for the start menu -->
            <section class="w-75 mx-auto text-center my-5 menu">

                <!-- The name of the application and game -->
                <h1>Connect 4</h1>

                <!-- This section will contain the menu options -->
                <section class="mt-5 pt-5">

                    <!-- Option for playing connect 4 against a friend on the same device -->
                    <button class="btn border-3 rounded-pill border-dark py-2 px-5 d-block mx-auto mt-3 friend">Play against friend</button>

                    <!-- Option for playing connect 4 against a medium difficult AI system -->
                    <button class="btn border-3 rounded-pill border-dark py-2 px-5 d-block mx-auto mt-3 AI">Play against computer</button>

                </section>
                
            </section>
    </main>
</body>
<script src="assets/js/transition.js"></script>
</html>