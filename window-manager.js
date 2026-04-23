let zCounterIndex= 5;

function openWind(id){
    const wind =document.getElementById(id);
    if (!wind) return;
    wind.style.display="block";
    wind.style.zIndex=++zCounterIndex;
}

function closeWind(id) {
    const wind=document.getElementById(id);
    if (!wind) return;
    wind.style.display="none";
}
// open windows when user clicks the icon on desktop
document.getElementById("music-player-icon-desktop").addEventListener("click", () =>
    openWind("music-player-window"));

document.getElementById("notepad-icon-desktop").addEventListener("click", () =>
    openWind("notepad-window"));

document.getElementById("notes-folder-icon-desktop").addEventListener("click", () =>
    openWind("notes-folder-window"));

document.getElementById("recipe-book-desktop").addEventListener("click", () =>
    openWind("grape-window"));

// open windows when user clicks the icon on taskbar
document.getElementById("music-player-taskbar").addEventListener("click", () =>
    openWind("music-player-window"));

document.getElementById("notepad-icon-taskbar").addEventListener("click", () =>
    openWind("notepad-window"));

document.getElementById("notes-folder-taskbar").addEventListener("click", () =>
    openWind("notes-folder-window"));

document.getElementById("recipe-book-taskbar").addEventListener("click", () =>
    openWind("grape-window"));


document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".close-window-button");
    if (!btn) return;
    const wind = btn.closest(".window");
    if (!wind) return;
    wind.style.display="none";

    if (wind.id === "music-player-window") {
        if (!songAudio.paused) {
            songAudio.pause();
        }
        songAudio.currentTime = 0;
    }
});

// z-index, if the user clicks the icon, it will bring it to the front
document.querySelectorAll(".window").forEach(wind=>{
    wind.addEventListener("mousedown", () =>{
        wind.style.zIndex = ++zCounterIndex;
    });
});
