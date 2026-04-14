document.addEventListener("DOMContentLoaded", function () {

    // CLOCK
    function updateClock() {
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

    // SOUND
    const clickSound = document.getElementById("click-sound");

    function playClickSound() {
        if (!clickSound) return;
        clickSound.currentTime = 0;
        clickSound.play();
    }

    // RECIPE WINDOW
    const recipeIconDesktop = document.getElementById("recipe-book-icon-desktop");
    const recipeIconTaskbar = document.getElementById("recipe-book-icon-taskbar");
    const grapeWindow = document.getElementById("grape-window");
    const closeGrape = document.getElementById("close-grape");

    function openRecipe() {
        grapeWindow.style.display = "block";
        playClickSound();
    }

    if (recipeIconDesktop) recipeIconDesktop.addEventListener("click", openRecipe);
    if (recipeIconTaskbar) recipeIconTaskbar.addEventListener("click", openRecipe);

    if (closeGrape) {
        closeGrape.addEventListener("click", () => {
            grapeWindow.style.display = "none";
            playClickSound();
        });
    }

    // NOTEPAD
    const notepadWindow = document.getElementById("notepad-window");
    const closeNotepad = document.getElementById("close-notepad");
    const notepadIcon = document.getElementById("notepad-icon");

    if (notepadIcon) {
        notepadIcon.addEventListener("click", () => {
            notepadWindow.style.display = "block";
        });
    }

    if (closeNotepad) {
        closeNotepad.addEventListener("click", () => {
            notepadWindow.style.display = "none";
        });
    }

});