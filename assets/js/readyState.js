var firstState = false;
var secondState = false;

// Summoning the function if the button with the class 'ready' has been clicked
$(document).on('click', 'button.ready', function(event){

    // Checking which one of the two ready buttons has been pressed
    if($(this).attr('id') == "ply1Ready"){

        // Changing the state of the first player ready state
        firstState = !firstState;

    }
    else{

        // Changing the state of the second player ready state
        secondState = !secondState;
    }

    // Changing the button color onclick (first player)
    if(firstState){
        $('#ply1Ready').removeClass("btn-danger");
        $('#ply1Ready').addClass("btn-success");
        $('#ply1Ready').text('Ready!')
    }
    else{
        $('#ply1Ready').addClass("btn-danger");
        $('#ply1Ready').removeClass("btn-success");
        $('#ply1Ready').text('Not ready!')
    }

    // Changing the button color onclick (second player)
    if(secondState){
        $('#ply2Ready').removeClass("btn-danger");
        $('#ply2Ready').addClass("btn-success");
        $('#ply2Ready').text('Ready!')
    }
    else{
        $('#ply2Ready').addClass("btn-danger");
        $('#ply2Ready').removeClass("btn-success");
        $('#ply2Ready').text('Not ready!')
    }

    // Enableing the start button if both players are ready
    if(firstState && secondState){
        $('#startmultiply').prop('disabled', false);
        $('#startmultiply').addClass('btn-success');
        $('#startmultiply').removeClass('btn-danger');
    }
    else{
        $('#startmultiply').prop('disabled', true);
        $('#startmultiply').removeClass('btn-success');
        $('#startmultiply').addClass('btn-danger');
    }
})