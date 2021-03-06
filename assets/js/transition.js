// After the button with the class 'friend' has been clicked, fade the menu out and open the name entry page (for playing against friend)
$(document).on('click', 'button.friend', function(event){

    // After button has been presed, fade the start menu out
    $(".menu").fadeOut(1000);

    // After 1100s relocate the players to the name entry page
    setTimeout(function(){
        window.location.href = 'subpages/playerNames.php';
    }, 1100 );
})