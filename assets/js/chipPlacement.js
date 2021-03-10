var notFull = [0, 1, 2, 3, 4, 5, 6];
$(document).on('click', 'button.enterChip', function(){
    var id = $(this).attr('id');
    var j = id%10;
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    var color = localStorage.getItem('ply1Color');
    setPlayerChip(color, j);
    setAIChip(notFull);
    for(i=0; notFull.length; i++){
        if($('#0'+notFull[i]).attr('class') != cls){
            notFull.splice(i, 1);
            break;
        }
    }
})