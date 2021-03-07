// After the button with the class 'friend' has been clicked, fade the menu out and open the name entry page (for playing against friend)
$(document).on('click', 'button.friend', function(event){

    // After button has been presed, fade the start menu out
    $(".menu").fadeOut(1000);

    // After 1100s relocate the players to the name entry page
    setTimeout(function(){
        window.location.href = 'subpages/playersOptions.php';
    }, 1100 );
})
// Clicking on the "Start game!" button the players menu will fade out and the game board will appear
.on('click', 'button.multiplay', function(event){

    // After button has been pressed, fade the players menu out
    $('main').fadeOut(1000);

    // After players menu has faded out, relocate the players to the game board
    setTimeout(function(){
        // window.location.href = 'gameBoard.php';
    })
})