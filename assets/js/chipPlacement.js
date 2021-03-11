var notFull = [0, 1, 2, 3, 4, 5, 6];
$(document).on('click', 'button.enterChip', function(){
    var id = $(this).attr('id');
    var j = parseInt(id%10);
    var color = localStorage.getItem('ply1Color');
    setPlayerChip(color, j);
    notFull = CheckIfEmpty(notFull);
    rowVictory(notFull);
    notFull = CheckIfEmpty(notFull);
})