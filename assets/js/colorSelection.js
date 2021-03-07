$(document).on('click', 'button.color1', function(){
    var text = $(this).val();
    console.log(text);
    $('.color1').removeClass("active1");
    $('.color1.'+text).addClass("active1");
    $('.color2').prop('disabled', false)
    $('.color2.'+text).prop('disabled', true)
})
.on('click', 'button.color2', function(){
    var text = $(this).val();
    console.log(text);
    $('.color2').removeClass("active2");
    $('.color2.'+text).addClass("active2");
    $('.color1').prop('disabled', false)
    $('.color1.'+text).prop('disabled', true)
})