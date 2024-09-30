const trackContainer = document.querySelector('.track-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-contaner');
const title = document.querySelector('.track-name');
const cover = document.querySelector('.track-img');

const songs = [
    'Dry Down feat Ben Snaath',
    "He's",
    'Leapt',
    'Water Feature'
];

let songIndex = 1;

//This is where the website will load the song and then update the song detail

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song //This will load the title of the song based on 
    audio.src = `Assignment 2/Audio/${song}.mp3`
    // cover.src = `images/${song}.jpg`
}

//Play pause button
playBtn.addEventListener('click', togglePlay);

function togglePlay() {
    if (audio.paused || audio.ended) {
        audio.play()
    } else {
        audio.pause()
    }
}