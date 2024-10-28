const video = document.querySelector("#video");
const videoControl = document.querySelector('.about-section');

video.addEventListener('autoplay', () => {
    video.play();
});

document.addEventListener('mousemove', (event) => {
    const videoWidth = video.clientWidth;
    const mouseX = event.clientX;

    const percentage = mouseX / window.innerWidth;

    const newTime = percentage * video.duration;

    if (newTime >= 0 && newTime <= video.duration) {
        video.currentTime = newTime;
    }
});


