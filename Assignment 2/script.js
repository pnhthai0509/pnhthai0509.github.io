//Create a track list menu that slide up when clicked
//This design is inspired by popular music player such as Spotify, Apple Music, Youtube Music
const upDownBtn = document.querySelector('#up-btn');
const upDownImg = document.querySelector('.upDownImg');
const trackListSection = document.querySelector('.track-list-section');
if (upDownBtn) {
  upDownBtn.addEventListener('click', function () {
    if (upDownImg.classList.contains('fa-caret-up')) {
      upDownImg.classList.remove('fa-caret-up');
      upDownImg.classList.add('fa-caret-down');
      trackListSection.classList.remove('track-list-section');
      trackListSection.classList.add('track-list-section-active');
    } else {
      upDownImg.classList.remove('fa-caret-down');
      upDownImg.classList.add('fa-caret-up');
      trackListSection.classList.remove('track-list-section-active');
      trackListSection.classList.add('track-list-section');
    }
  });
}

//Song titles
const videoVisual = document.querySelector('#video');
const title = document.querySelector('#title');

const videoList = [
  {name: "Dry Down feat Ben Snaath"}, link: ""
]


//Play/pause video
const playPauseBtn = document.querySelector('#play-pause-btn');
const playPauseImg = document.querySelector('.play-pause-img');

playPauseBtn.addEventListener('click', togglePlay);

function togglePlay() {
  if (video.paused || video.ended) {
    videoVisual.play();
    playPauseImg.classList.remove('fa-play');
    playPauseImg.classList.add('fa-pause');
  } else {
    videoVisual.pause()
    playPauseImg.classList.remove('fa-pause');
    playPauseImg.classList.add('fa-play');
  }
}

//Mute/unmute video

const muteUnmuteBtn = document.querySelector('#mute-unmute-btn');
const muteUnmuteImg = document.querySelector('.mute-unmute-img');
muteUnmuteBtn.addEventListener('click', toggleMute);

function toggleMute() {
  if (video.muted) {
    videoVisual.muted = false;
    muteUnmuteImg.classList.remove('fa-volume-xmark');
    muteUnmuteImg.classList.add('fa-volume');
  } else {
    videoVisual.muted = true;
    muteUnmuteImg.classList.remove('fa-volume');
    muteUnmuteImg.classList.add('fa-volume-xmark');
  }
}

//Next/previous video
// const prevBtn = document.querySelector('#previous-btn');
// const nextBtn = document.querySelector('next-btn');
// prevBtn.addEventListener('click', prevTrack);
// nextBtn.addEventListener('click', nextTrack);

