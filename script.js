// CLOCK
function updateClock(){
    const clock = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? "0" + minutes : minutes;

    clock.innerText = hours + ":" + minutes;
}

setInterval(updateClock, 1000);
updateClock();


// SOUND
const clickSound = document.getElementById("click-sound");

function playClickSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}


// GRAPE WINDOW
const grapeIcon = document.getElementById("grape-icon");
const grapeWindow = document.getElementById("grape-window");
const closeGrape = document.getElementById("close-grape");

grapeIcon.addEventListener("click", () => {
    playClickSound();
    grapeWindow.style.display = "block";
});

closeGrape.addEventListener("click", () => {
    playClickSound();
    grapeWindow.style.display = "none";
});


// BUTTON SOUNDS
const buttons = document.querySelectorAll(".sound-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", playClickSound);
});
