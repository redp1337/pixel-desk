let currently_playing= document.querySelector('#song-title');

let play_button = document.querySelector('#play');
let stop_button =document.querySelector('#stop');
let next_button =document.querySelector('#next');
let back_button =document.querySelector('#back');

let song_index=0;
let isCurrentlyPlaying =false;

let playlist = [
    {name: "song1", file: "./music/song1.mp3"},
    {name: "song2", file: "./music/song2.mp3"},
    {name: "song3", file: "./music/song3.mp3"},
]

let songAudio = new Audio(playlist[song_index].file);


