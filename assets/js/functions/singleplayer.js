function setPlayerChip(color, j, score){
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    for(i=5; i>=0; i--){
        id=(i*10)+j;
        if($('#'+id).attr('class') == cls){
            $('#'+id).removeClass('enterChip');
            $('#'+id).addClass(color);
            $('#'+id).val('1')
            return i;
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
            $('#0'+j).val('1')
            return 0;
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
            $('#'+id).val('5')
            break;
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
            $('#0'+j).val('5')
        }
    }
}
function CheckIfEmpty(notFull){
    var cls = 'btn enterChip rounded-circle border-3 border-dark';
    for(i=0; notFull.length; i++){
        if($('#0'+notFull[i]).attr('class') != cls){
            notFull.splice(i, 1);
            break;
        }
    }
    return notFull;
}
function columnVictory(notFull){
    placed = false;
    for(i=0; i<7; i++){
        for(j=0; j<3; j++){
            var score = 0;
            for(s=j; s<(j+4); s++){
                score += parseInt($('#'+s+''+i).val());
            }
            if(score == 3 || score == 15){
                for(s=j; s<(j+4); s++){
                    $('#'+s+''+i).removeClass('enterChip');
                    $('#'+s+''+i).addClass('yellow');
                    $('#'+s+''+i).val('5');
                    placed = true;
                    break;
                }
                if(placed){
                    break;
                }
            }
            if(placed){
                break
            }
        }
    }
    // if(!placed){
    //     leftDiagonalVictory(notFull)
    // }
}
function rowVictory(notFull){
    placed = false;
    for(i=0; i<6; i++){
        for(j=0; j<4; j++){
            var score = 0;
            for(s=j; s<(j+4); s++){
                score += parseInt($('#'+i+''+s).val());
            }
            if(score == 3 || score == 15){
                for(s=j; s<(j+4); s++){
                    if(i < 5){
                        if($('#'+(i+1)+''+s).val() != '0' && $('#'+i+''+s).val() == '0'){
                            $('#'+i+''+s).removeClass('enterChip');
                            $('#'+i+''+s).addClass('yellow');
                            $('#'+i+''+s).val('5');
                            placed = true;
                            break
                        }
                    }
                    else if($('#'+i+''+s).val() == '0'){
                        $('#'+i+''+s).removeClass('enterChip');
                        $('#'+i+''+s).addClass('yellow');
                        $('#'+i+''+s).val('5');
                        placed = true;
                        break;
                    }
                }
                if(placed){
                    break;
                }
            }
        }
    }
    if(!placed){
        columnVictory(notFull)
    }
}