const correctPass="36";

const sounds = { 
    click: new Audio("sounds/click.mp3") 
    close: new Audio("sounds/close.mp3") 
    save: new Audio("sounds/save.mp3")
    play: new Audio("sounds/play.mp3") 
    pause: new Audio("sounds/pause.mp3")
}; 

function playSound(sound) { 
    sound.currentTime = 0; 
    sound.play(); 
} 

function enterPass(){
    const userPassEntry= document.getElementById('pass').value;
    if (correctPass=== userPassEntry){
        playSound(sounds.click);
        window.location.href='desktop.html';
    } else{ 
        playSound(sounds.click);
        document.getElementById('error-box').style.display="flex";
    }
}

function closeError(){
    document.getElementById('error-box').style.display='none';
}

