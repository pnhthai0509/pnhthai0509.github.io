//Create a track list menu that slide up when clicked
//This design is inspired by popular music player such as Spotify, Apple Music, Youtube Music
const upDownBtn = document.querySelector("#up-btn");
const upDownImg = document.querySelector(".upDownImg");
const trackListSection = document.querySelector(".track-list-section");
if (upDownBtn) {
  upDownBtn.addEventListener("click", function () {
    if (upDownImg.classList.contains("fa-caret-up")) {
      upDownImg.classList.remove("fa-caret-up");
      upDownImg.classList.add("fa-caret-down");
      trackListSection.classList.remove("track-list-section");
      trackListSection.classList.add("track-list-section-active");
    } else {
      upDownImg.classList.remove("fa-caret-down");
      upDownImg.classList.add("fa-caret-up");
      trackListSection.classList.remove("track-list-section-active");
      trackListSection.classList.add("track-list-section");
    }
  });
}

//Info dropdown
const infoBtn = document.querySelector(".info");
const infoSection = document.querySelector(".info-section");

infoBtn.addEventListener("click", toggleDropDown);
function toggleDropDown() {
  if (infoSection.classList.contains("info-section")) {
    infoSection.classList.remove("info-section");
    infoSection.classList.add("info-section-active");
  } else {
    infoSection.classList.remove("info-section-active");
    infoSection.classList.add("info-section");
  }
}
//Change Song's album
const trackImg = document.querySelector(".track-img-large");
const imgList = [
  { name: "Track_1", link: "./Elements/Track_1.png" },
  { name: "Track_2", link: "./Elements/Track_2.png" },
  { name: "Track_3", link: "./Elements/Track_3.png" },
  { name: "Track_4", link: "./Elements/Track_4.png" },
];

//Song titles
const videoVisual = document.querySelector("#video");
let videoTitle = document.querySelectorAll("#track-title");

const videoList = [
  { name: "Dry Down feat Ben Snaath", link: "https://dl.dropboxusercontent.com/scl/fi/oher31x82x8ap39m80d4n/Dry_Down_feat_Ben_Snaath.mp4?rlkey=4rypbiglt0i759ci49lyeu9k0&st=6ea6ax1l&dl=0" },
  { name: "He's", link: "https://dl.dropboxusercontent.com/scl/fi/ufpmfy4llvvtj5nkrkyft/He-s.mp4?rlkey=32uy47gtd9yygy2v89viw9509&st=jsbkzopx&dl=0"},
  { name: "Leapt", link: "https://dl.dropboxusercontent.com/scl/fi/8b19jwtzl0z8vv3u06hw2/Leapt.mp4?rlkey=vep0bbo3e1rrh79skpvoqatwu&st=iz0t8kph&dl=0"},
  { name: "Water Feature", link: "https://dl.dropboxusercontent.com/scl/fi/p70sq16tm8iiuziswtwee/Water_Feature.mp4?rlkey=8sxljbfhjjebacuhpsjujwy26&st=ozvidtyh&dl=0"}
];

function playVideo(index) {
  videoVisual.pause();
  videoVisual.src = videoList[index].link;
  trackImg.src = imgList[index].link;
  videoTitle.forEach((vtl) => (vtl.textContent = videoList[index].name));
  videoVisual.load();
  videoVisual.play();
}

//play video through track list
const firstVideo = document.querySelector(".track1");
const secondVideo = document.querySelector(".track2");
const thirdVideo = document.querySelector(".track3");
const forthVideo = document.querySelector(".track4");
firstVideo.addEventListener("click", function player() {
  videoVisual.pause();
  playVideo(0);
});

secondVideo.addEventListener("click", function player() {
  videoVisual.pause();
  playVideo(1);
});

thirdVideo.addEventListener("click", function player() {
  videoVisual.pause();
  playVideo(2);
});

forthVideo.addEventListener("click", function player() {
  videoVisual.pause();
  playVideo(3);
});

let currentIndex = 0;

//Play-pause video
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector(".play-pause-img");
playPauseBtn.addEventListener("click", togglePlay);
videoVisual.addEventListener("click", togglePlay); //Click anywhere on the video to play the video
function togglePlay() {
  if (videoVisual.paused || videoVisual.ended) {
    videoVisual.play();
    playPauseImg.classList.remove("fa-play");
    playPauseImg.classList.add("fa-pause");
  } else {
    videoVisual.pause();
    playPauseImg.classList.remove("fa-pause");
    playPauseImg.classList.add("fa-play");
  }
}
//Mute/unmute video
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
const muteUnmuteImg = document.querySelector(".mute-unmute-img");
muteUnmuteBtn.addEventListener("click", toggleMute);
function toggleMute() {
  if (video.muted) {
    videoVisual.muted = false;
    muteUnmuteImg.classList.remove("fa-volume-xmark");
    muteUnmuteImg.classList.add("fa-volume");
  } else {
    videoVisual.muted = true;
    muteUnmuteImg.classList.remove("fa-volume");
    muteUnmuteImg.classList.add("fa-volume-xmark");
  }
}
//Next-previous video
const prevBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
prevBtn.addEventListener("click", prevTrack);
nextBtn.addEventListener("click", nextTrack);

function playVideoAtIndex(index) {
  videoVisual.pause();
  console.log(videoList[index].link);
  videoVisual.src = videoList[index].link;
  trackImg.src = imgList[index].link;
  videoTitle.forEach((vtl) => (vtl.textContent = videoList[index].name));
  videoVisual.load();
  videoVisual.play();
  if (videoVisual.played || videoVisual.ended) {
    playPauseImg.classList.remove("fa-play");
    playPauseImg.classList.add("fa-pause");
  } else {
    playPauseImg.classList.remove("fa-pause");
    playPauseImg.classList.add("fa-play");
  }
  //this will change the play button after change to another video even if the video is pause
}
function prevTrack() {
  console.log("previous track loading");
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
  console.log(currentIndex);
  playVideoAtIndex(currentIndex);
}

function nextTrack() {
  console.log("next track loading");
  currentIndex = (currentIndex + 1) % videoList.length;
  console.log(currentIndex);
  playVideoAtIndex(currentIndex);
}

//Progress bar
const progressBar = document.querySelector(".progress-bar");
const progressBarFill = document.getElementById("progress-bar-fill");
videoVisual.addEventListener("timeupdate", () => {
  const progress = (videoVisual.currentTime / videoVisual.duration) * 100;
  progressBarFill.style.width = `${progress}%`;
});

progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const width = rect.width;
  const duration = video.duration;
  videoVisual.currentTime = (offsetX / width) * duration;
});

//Loop video
const loopBtn = document.querySelector("#loop-btn");
const loopBtnImg = document.querySelector(".loop-btn-img");
loopBtn.addEventListener("click", loopVideo);
videoVisual.addEventListener("ended", replay);
let loop = false;

function replay() {
  if (loop) {
    videoVisual.currentTime = 0;
    videoVisual.play();
  }
}

function loopVideo() {
  loop = !loop; //this will show the current state of the loop
  if (loop) {
    loopBtnImg.classList.remove("fa-repeat");
    loopBtnImg.classList.add("fa-arrows-repeat-1");
  } else {
    loopBtnImg.classList.remove("fa-arrows-repeat-1");
    loopBtnImg.classList.add("fa-repeat");
  }
}
