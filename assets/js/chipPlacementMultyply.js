var ply1Turn = JSON.parse(localStorage.getItem('ply1GoesFirst'));
var ply1Name = localStorage.getItem('ply1Name');
var ply2Name = localStorage.getItem('ply2Name');
var color1 = localStorage.getItem('ply1Color')
var color2 = localStorage.getItem('ply2Color');
if(ply1Turn){
    $('#curPly').text(ply1Name)
}
else{
    $('#curPly').text(ply2Name)
}
$(document).on('click', 'button.enterChip', function(){
    var id = $(this).attr('id');
    var j = parseInt(id%10);
    if(ply1Turn){
        setPlayerChip(color1, j, ply1Turn);
        $('#curPly').text(ply2Name)
    }
    else{
        setPlayerChip(color2, j, ply1Turn);
        $('#curPly').text(ply1Name)
    }
    ply1Turn = !ply1Turn;
    checkRow(ply1Name, ply2Name);
})