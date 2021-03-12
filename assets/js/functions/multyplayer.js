function setPlayerChip(color, j, turn){
    var cls = 'btn enterChip rounded-circle';
    for(i=5; i>=0; i--){
        id=(i*10)+j;
        if($('#'+id).attr('class') == cls){
            $('#'+id).removeClass('enterChip');
            $('#'+id).addClass(color);
            if(turn){
                $('#'+id).val('1')
            }
            else{
                $('#'+id).val('5')
            }
            break
        }else if($('#0'+j).attr('class') == cls && $('#1'+j).attr('class') != cls){
            $('#0'+j).removeClass('enterChip');
            $('#0'+j).addClass(color);
            if(turn){
                $('#'+id).val('1')
            }
            else{
                $('#'+id).val('5')
            }
            break
        }
    }
}
function checkRightDiagonal(name1, name2){
    var placed = false;
    for(i=5;i>=3;i--){
        for(j=6;j>=3;j--){
            var score = 0;
            for(s=0; s<4;s++){
                score += parseInt($('#'+(i-s)+''+(j-s)).val());
            }
            if(score == 4 || score == 20){
                $('.enterChip').prop('disabled', true)
                for(s=0;s<4;s++){
                    $('#'+(i-s)+''+(j-s)).addClass('victory');
                    placed = true;
                }
                if(score == 4){
                    $('#winner').text(name1)
                }
                else{
                    $('#winner').text(name2)
                }
                setTimeout(function(){
                    $('.gameboard').fadeOut(500);
                    setTimeout(function(){
                        $('.wpannel').fadeIn(500)
                    }, 500)
                },1000);
            }
            if(placed){
                break;
            }
        }
        if(placed){
            break;
        }
    }  
}
function checkLeftDiagonal(name1, name2){
    var placed = false;
    for(i=5;i>=3;i--){
        for(j=0;j<4;j++){
            var score = 0;
            for(s=0; s<4;s++){
                score += parseInt($('#'+(i-s)+''+(j+s)).val());
            }
            if(score == 4 || score == 20){
                console.log(score)
                $('.enterChip').prop('disabled', true)
                for(s=0;s<4;s++){
                        $('#'+(i-s)+''+(j+s)).addClass('victory');
                        placed = true;
                    }
                    if(score == 4){
                        $('#winner').text(name1)
                    }
                    else{
                        $('#winner').text(name2)
                    }
                    setTimeout(function(){
                        $('.gameboard').fadeOut(500);
                        setTimeout(function(){
                            $('.wpannel').fadeIn(500)
                        }, 500)
                    },1000);
                }
                
            }
            if(placed){
                break;
            }
        }
    if(!placed){
        checkRightDiagonal(name1, name2)
    }
}
function checkColumn(name1, name2){
    placed = false;
    for(i=0; i<7; i++){
        for(j=0; j<3; j++){
            var score = 0;
            for(s=j; s<(j+4); s++){
                score += parseInt($('#'+s+''+i).val());
            }
            if(score == 4 || score == 20){
                $('.enterChip').prop('disabled', true)
                for(s=j; s<(j+4); s++){
                    $('#'+s+''+i).addClass('victory');
                    placed = true;
                }
                if(score == 4){
                    $('#winner').text(name1)
                }
                else{
                    $('#winner').text(name2)
                }
                setTimeout(function(){
                    $('.gameboard').fadeOut(500);
                    setTimeout(function(){
                        $('.wpannel').fadeIn(500)
                    }, 500)
                },1000);
                if(placed){
                    break;
                }
            }
            if(placed){
                break
            }
        }
    }
    if(!placed){
        checkLeftDiagonal(name1, name2)
    }
}
function checkRow(name1, name2){
    placed = false;
    for(i=0; i<6; i++){
        for(j=0; j<4; j++){
            var score = 0;
            for(s=j; s<(j+4); s++){
                score += parseInt($('#'+i+''+s).val());
            }
            if(score == 4 || score == 20){
                $('.enterChip').prop('disabled', true)
                for(s=j; s<(j+4); s++){
                    $('#'+i+''+s).addClass('victory');
                    placed = true;
                }
                if(score == 4){
                    $('#winner').text(name1)
                }
                else{
                    $('#winner').text(name2)
                }
                setTimeout(function(){
                    $('.gameboard').fadeOut(500);
                    setTimeout(function(){
                        $('.wpannel').fadeIn(500)
                    }, 500)
                },1000);
                if(placed){
                    break;
                }
            }
        }
    }
    if(!placed){
        checkColumn(name1, name2)
    }
}  