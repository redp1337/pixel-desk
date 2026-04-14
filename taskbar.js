function updateClock(){
    const today = new Date(); 
    let hours = today.getHours();
    let minutes= today.getMinutes();
    document.getElementById('clock').innerHTML=hours+":"+minutes;
    setTimeout(updateClock, 1000);

}
function fixTime(i){
    if (i<10){
        i="0"+i
    }
    return i;

}

updateClock();