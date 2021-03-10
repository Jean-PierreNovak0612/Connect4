var playerTurn = true;
$(document).on('click', 'button.enterChip', function(){
    var id = $(this).attr('id');
    var j = id%10;
    var color;
    if(playerTurn){
        color = localStorage.getItem('ply1Color');
    }
    else{
        color = 'yellow';
    }
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    for(i=5; i>=0; i--){
        id=i*10+j;
        if($('#'+id).attr('class') == 'btn enterChip rounded-circle border-3 border-dark'){
            $('#'+id).removeClass('enterChip');
            $('#'+id).addClass(color);
            break;
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
        }
    }
    playerTurn = !playerTurn;
})