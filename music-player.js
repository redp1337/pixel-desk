let currently_playing= document.querySelector('#song-title');

let play_button = document.querySelector('#play');
let stop_button =document.querySelector('#stop');
let next_button =document.querySelector('#next');
let back_button =document.querySelector('#back');

let song_index=0;
let isCurrentlyPlaying =false;

let playlist = [
    {name: "Track 1 : trees", file: "./music/song1.mp3"},
    {name: "Track 2 : maple", file: "./music/song2.mp3"},
    {name: "Track 3 : apple", file: "./music/song3.mp3"},
]

let songAudio = new Audio(playlist[song_index].file);

currently_playing.textContent=playlist[song_index].name;

play_button.addEventListener("click", function(){
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    currently_playing.textContent= playlist[song_index].name;
});

stop_button.addEventListener("click", function(){
    songAudio.pause();
});

next_button.addEventListener("click", function(){
    song_index=(song_index+1)%playlist.length;
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    songAudio.currentTime=0;
    currently_playing.textContent= playlist[song_index].name;
})

back_button.addEventListener("click", function(){
    song_index=(song_index-1)%playlist.length;
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    currently_playing.textContent= playlist[song_index].name;
})
