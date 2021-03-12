var ply1GoesFirst;
window.onload = function(){
    if($('.goesFirst').attr('id') == 'ply1'){
        ply1GoesFirst = true;
        localStorage.setItem('ply1GoesFirst', JSON.stringify(ply1GoesFirst));
    }
    else{
        ply1GoesFirst = false;
        localStorage.setItem('ply1GoesFirst', JSON.stringify(ply1GoesFirst));
    }
}
$(document).on('click', 'button.selectWhoGoesFirst', function(){

    $('.selectWhoGoesFirst').removeClass('goesFirst');
    if($(this).attr('id') == 'ply1'){
        $('#ply1').addClass('goesFirst');
        ply1GoesFirst = true;
    }
    else{
        $('#ply2').addClass('goesFirst')
        ply1GoesFirst = false;
    }
    localStorage.setItem('ply1GoesFirst', JSON.stringify(ply1GoesFirst));
})