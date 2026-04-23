function updateClock(){
    const today = new Date(); 
    let hours = today.getHours();
    let minutes= today.getMinutes();
// if time had a 0 or started with a 0, function would omit the leading or starting zero
    hours=fixTime(hours);
    minutes=fixTime(minutes);
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