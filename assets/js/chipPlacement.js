var notFull = [0, 1, 2, 3, 4, 5, 6];
$('span').text(localStorage.getItem('ply1Name'));
$(document).on('click', 'button.enterChip', function(){
    $('span').text(localStorage.getItem('ply1Name'));
    var id = $(this).attr('id');
    var j = parseInt(id%10);
    var color = localStorage.getItem('ply1Color');
    setPlayerChip(color, j);
    notFull = CheckIfEmpty(notFull);
    rowVictory(notFull)
    checkRow();
    notFull = CheckIfEmpty(notFull);
})