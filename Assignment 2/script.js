var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});

let track1 = new Audio();
track1.src = "/Assignment 2/Audio/p-hase_Dry-Down-feat-Ben-Snaath.mp3";

const playPauseButton = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");

function toggle() {
  if (track1.paused || track1.ended) {
    track1.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    console.log("The music is now playing!");
  } else {
    track1.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    console.log("The music is stopped!");
  }
}

playPauseButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggle();
});
//Play button section
const outside = document.querySelector("#container");
outside.addEventListener("click", function () {
  toggle();
});
//Click anywhere to play music section
