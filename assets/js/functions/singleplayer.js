function setPlayerChip(color, j){
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    for(i=5; i>=0; i--){
        id=i*10+j;
        if($('#'+id).attr('class') == cls){
            $('#'+id).removeClass('enterChip');
            $('#'+id).addClass(color);
            break;
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
        }
    }
}
function setAIChip(notFull){
    var crrind = notFull.length, temparr, rand;
    while (0 != crrind){
        rand = Math.floor(Math.random() * crrind);
        crrind -= 1;
        temparr = notFull[crrind];
        notFull[crrind] = notFull[rand];
        notFull[rand] = temparr;
    }
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    var color = 'yellow';
    var j = notFull[0];
    for(i=5; i>=0; i--){
        id=i*10+j;
        if($('#'+id).attr('class') == cls){
            $('#'+id).removeClass('enterChip');
            $('#'+id).addClass(color);
            break;
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
        }
    }
}