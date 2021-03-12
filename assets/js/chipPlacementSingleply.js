var notFull = [0, 1, 2, 3, 4, 5, 6];
$('#curPly').text(localStorage.getItem('ply1Name'));
$(document).on('click', 'button.enterChip', function(){
    var id = $(this).attr('id');
    var j = parseInt(id%10);
    var color = localStorage.getItem('ply1Color');
    setPlayerChip(color, j);
    checkRow();
    notFull = CheckIfEmpty(notFull);
    if($('.enterChip').prop('disabled') == false){
        rowVictory(notFull)
        checkRow();
        notFull = CheckIfEmpty(notFull);
    }
})