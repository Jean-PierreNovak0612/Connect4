window.onload = function(){
    var ply1Color = $('.active1').val();
    var ply2Color = $('.active2').val();
    localStorage.setItem('ply1Color', ply1Color);
    localStorage.setItem('ply2Color', ply2Color);
}
$(document).on('click', 'button.color1', function(){
    var ply1Color = $(this).val();
    $('.color1').removeClass("active1");
    $('.color1.'+ply1Color).addClass("active1");
    $('.color2').prop('disabled', false)
    $('.color2.'+ply1Color).prop('disabled', true);
    localStorage.setItem('ply1Color', ply1Color);
})
.on('click', 'button.color2', function(){
    var ply2Color = $(this).val();
    $('.color2').removeClass("active2");
    $('.color2.'+ply2Color).addClass("active2");
    $('.color1').prop('disabled', false)
    $('.color1.'+ply2Color).prop('disabled', true)
    localStorage.setItem('ply2Color', ply2Color);
})