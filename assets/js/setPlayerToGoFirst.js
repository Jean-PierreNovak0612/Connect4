$(document).on('click', 'button.selectWhoGoesFirst', function(){

    $('.selectWhoGoesFirst').removeClass('goesFirst');
    if($(this).attr('id') == 'ply1'){
        $('#ply1').addClass('goesFirst');
    }
    else{
        $('#ply2').addClass('goesFirst')
    }
})