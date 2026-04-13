document.addEventListener("DOMContentLoaded", function () {

    // ICONS
    const recipeIconDesktop = document.getElementById("recipe-book-icon-desktop");
    const recipeIconTaskbar = document.getElementById("recipe-book-icon-taskbar");

    // WINDOW
    const recipeWindow = document.getElementById("grape-window");
    const closeBtn = document.getElementById("close-grape");

    // SOUND
    const clickSound = document.getElementById("click-sound");

    function playSound() {
        if (!clickSound) return;
        clickSound.currentTime = 0;
        clickSound.play();
    }

    // OPEN WINDOW (desktop icon)
    if (recipeIconDesktop) {
        recipeIconDesktop.addEventListener("click", function () {
            recipeWindow.style.display = "block";
            playSound();
        });
    }

    // OPEN WINDOW (taskbar icon)
    if (recipeIconTaskbar) {
        recipeIconTaskbar.addEventListener("click", function () {
            recipeWindow.style.display = "block";
            playSound();
        });
    }

    // CLOSE WINDOW
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            recipeWindow.style.display = "none";
            playSound();
        });
    }

});
