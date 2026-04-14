let currently_playing= document.querySelector('#song-title');

let play_button = document.querySelector('#play');
let stop_button =document.querySelector('#stop');
let next_button =document.querySelector('#next');
let back_button =document.querySelector('#back');

let song_index=0;

let playlist = [
    {name: "Track 1 : GATTACA", file: "./music/song1.mp3"},
    {name: "Track 2 : KNIVES OUT", file: "./music/song2.mp3"},
    {name: "Track 3 : BLADE RUNNER", file: "./music/song3.mp3"},
]

let songAudio = new Audio(playlist[song_index].file);

//autoplay, when the song ends, the next song is played automatically
songAudio.addEventListener("ended", function(){
    song_index= (song_index+1)% playlist.length;
    songAudio.src=playlist[song_index].file;
    songAudio.play()
    currently_playing.textContent=playlist[song_index].name;
});
currently_playing.textContent=playlist[song_index].name;

//when play button is clicked, the song will start
play_button.addEventListener("click", function(){
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    currently_playing.textContent= playlist[song_index].name;
});

//when stop button is clicked, the song will pause
stop_button.addEventListener("click", function(){
    songAudio.pause();
    songAudio.currentTime=0;
});

//when button is clicked, the song will be skipped
next_button.addEventListener("click", function(){
    song_index=(song_index+1+playlist.length)%playlist.length;
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    currently_playing.textContent= playlist[song_index].name;
});

//when button is clicked, the previous song will play 
back_button.addEventListener("click", function(){
    song_index=(song_index-1+playlist.length)%playlist.length;
    songAudio.src=playlist[song_index].file;
    songAudio.play();
    currently_playing.textContent= playlist[song_index].name;
});
