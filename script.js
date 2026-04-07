// CLOCK
function updateClock(){
    const clock = document.getElementById("clock");
    if (!clock) return;

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? "0" + minutes : minutes;

    clock.innerText = hours + ":" + minutes;
}

setInterval(updateClock, 1000);
updateClock();
