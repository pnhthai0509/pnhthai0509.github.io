const video = document.querySelector("#video");
const videoControl = document.querySelector('.about-section');

// Play the video automatically when it can play
video.addEventListener('canplay', () => {
    video.play();
});

// Update video playback position based on mouse movement
document.addEventListener('mousemove', (event) => {
    // Get the video's width and the mouse's x position
    const videoWidth = video.clientWidth;
    const mouseX = event.clientX;

    // Calculate the percentage of the mouse's position across the window width
    const percentage = mouseX / window.innerWidth;

    // Calculate the new playback time for the video
    const newTime = percentage * video.duration;

    // Update the video's current time without interrupting playback
    if (newTime >= 0 && newTime <= video.duration) {
        video.currentTime = newTime;
    }
});
