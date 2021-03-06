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

        <!-- This is the container for the start menu template -->
        <section class="StartMenu w-75 mx-auto">
            <?php

                // Including the file with the start menu
                include_once "templates/StartingMenu.php";

            ?>
        </div>
    </main>
</body>
<?php

    // Including the footer file
    include_once "inc/footer.php";
?>
</html>