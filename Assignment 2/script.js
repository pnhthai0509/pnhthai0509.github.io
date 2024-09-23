const button1 = document.getElementById('play-button');
let track1 = new Audio();
track1.src = 'Audio/Assignment 2/Audio/p-hase_Dry-Down-feat-Ben-Snaath.mp3';

button1.addEventListener('click', function(){
    track1.play();
    track1.addEventListener('playing', function(){
        console.log('Track 1 is now playing!');
    });
});