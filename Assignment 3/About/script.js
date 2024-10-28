// This script will be used for the About page. As mentioned earlier, my plan is to make the background video react to mouse movement. To achieve this, I will use `addEventListener` to track the X position of the mouse and utilize that value to control the video playback.

const video = document.querySelector("#video");
const videoControl = document.querySelector('.about-section');

document.addEventListener('mousemove', (e) => { // This code tracks mouse movement on the screen, with the mouse position represented by `e.clientX`.
    const videoWidth = video.clientWidth; 
    const mouseX = e.clientX;

    const percentage = mouseX / window.innerWidth; // This calculates the percentage of the window's width that the mouse currently occupies.

    const newTime = percentage * video.duration; // This calculates the new playback time for the video based on the mouse's position. By multiplying the percentage of the window's width by `video.duration`, we determine how far into the video to jump, relative to the mouse's location.

    if (newTime >= 0 && newTime <= video.duration) { // This checks if `newTime` falls within the valid range (between 0 and the video's total duration). If it does, the video will jump to the corresponding point based on the mouse's position on the screen.
        video.currentTime = newTime;
    }
});


