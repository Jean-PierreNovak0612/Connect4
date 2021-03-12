$('input.name1').on('keyup', function(){
    var ply1Name = $(this).val().trim();
    if(ply1Name != ''){
        $('#startsingleply').prop('disabled', false);
        $('#ply1Ready').prop('disabled', false);
        $('#startsingleply').removeClass('btn-danger');
        $('#startsingleply').addClass('btn-success');
        localStorage.setItem('ply1Name', ply1Name);
    }
    else{
        $('#startsingleply').prop('disabled', true);
        $('#ply1Ready').prop('disabled', true);
        $('#startsingleply').removeClass('btn-success')
        $('#startsingleply').addClass('btn-danger')
    }
})
$('input.name2').on('keyup', function(){
    var ply2Name = $(this).val().trim();
    if(ply2Name != ''){
        $('#ply2Ready').prop('disabled', false);
        localStorage.setItem('ply2Name', ply2Name);
    }
    else{
        $('#ply2Ready').prop('disabled', true);
    }
})