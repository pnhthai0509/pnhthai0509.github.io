const video = document.querySelector("#video");
const videoControl = document.querySelector('.about-section');


document.addEventListener('mousemove', (event) => {
    // Get the width of the video
    const videoWidth = video.clientWidth;

    // Get the x position of the mouse within the window
    const mouseX = event.clientX;

    // Calculate the percentage of the mouse's position across the width of the window
    const percentage = mouseX / window.innerWidth;

    // Calculate the new time for the video based on the mouse position
    const newTime = percentage * video.duration;

    // Set the video's current time
    video.currentTime = newTime;
});
