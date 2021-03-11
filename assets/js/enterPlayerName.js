$(document).on('keyup', 'input.name1', function(){
    var ply1Name = $('.name1').val();
    ply1Name = ply1Name.replace(/\s+/g, '').trim();
    if(ply1Name != '' || ply1Name != ' '){
        $('#startsingleply').prop('disabled', false)
        $('#startsingleply').removeClass('btn-danger');
        $('#startsingleply').addClass('btn-success');
        localStorage.setItem('ply1Name', ply1Name);
    }
    else{
        $('#startsingleply').prop('disabled', true)
        $('#startsingleply').removeClass('btn-success')
        $('#startsingleply').addClass('btn-danger')
    }
})