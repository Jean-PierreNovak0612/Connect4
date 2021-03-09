// After the button with the class 'friend' has been clicked, fade the menu out and open the players option page (for playing against friend)
$(document).on('click', 'button.friend', function(){

    // After button has been presed, fade the start menu out
    $(".menu").fadeOut(1000);

    // After 1100s relocate the players to the name entry page
    setTimeout(function(){
        window.location.href = 'subpages/playersOptions.php';
    }, 1100 );
})
// Clicking on the button with the class 'AI' will relocate the player to the player option menu
.on('click', 'button.AI', function(){
    // After button has been presed, fade the start menu out
    $(".menu").fadeOut(1000);

    // After 1100s relocate the players to the name entry page
    setTimeout(function(){
        window.location.href = 'subpages/playerOptions.php';
    }, 1100 );
})
// Clicking on the "Start game!" (for multiplayer) button the players menu will fade out and the game board will appear
.on('click', 'button.multiplay', function(){

    // After button has been pressed, fade the players menu out
    $('main').fadeOut(1000);

    // After players menu has faded out, relocate the players to the game board
    setTimeout(function(){
        // window.location.href = 'gameBoardMulty.php';
    })
})
// Clicking on the "Start game!" (for singleplayer) button the player menu will fade out and the game board will appear
.on('click', 'button.singleplay', function(){

    // After button has been pressed, fade the players menu out
    $('main').fadeOut(1000);

    // After players menu has faded out, relocate the players to the game board
    setTimeout(function(){
        // window.location.href = 'gameBoardSingle.php';
    })
})