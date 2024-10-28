//This is the script I will use for the "Selected Works" section. Since I want these effects to work only on desktop, I implemented an "if-else" function that checks if the screen width is greater than 900 pixels. If it is, the effects will be enabled; otherwise, they will be disabled. To achieve this effect, I first need to obtain the coordinates of the images and match them with the mouse coordinates. To ensure a seamless transition between each hover state, I researched and discovered articles explaining 'requestAnimationFrame' (https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), which allows for constant updates to animations. 

if (window.innerWidth > 900) { //This will check if the screen width is greater than 900 pixels
  const selWorkImgContainer = document.querySelector(".sel-work-wrapper");
  const selWorkImages = document.querySelectorAll(".sel-work-img");
  //This will store coordinate that the image wants to appear.
  let targetX = 0;
  let targetY = 0;

   //This will store the currnet coordinate of the image.
  let currentX = 0;
  let currentY = 0;

  function updateImagePosition() {
    currentX += (targetX - currentX) * 0.1; 
    currentY += (targetY - currentY) * 0.1;

  //This can be a bit tricky to explain. I want to calculate the distance between the current position of the mouse (targetX/Y) and the current position of the image (currentX/Y). By adding this distance to the image's current position, the image will continuously move toward the mouse cursor. To create a more gradual and smooth movement, rather than having the image jump directly to the cursor, I multiplied the distance by 0.1. This adjustment allows for a smoother transition as the image follows the mouse.

    selWorkImages.forEach((img) => {
      img.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    });
  
  //This will tell each images to move to new currentX/Y positions that were calculated. The translate(-50%, -50%) part helps to center the image around the mouse. It makes sure the middle of the image is where you want it, not the corner.

    requestAnimationFrame(updateImagePosition); //This will instruct the function to continuously update the image positions. As I move my mouse to hover over different projects, the image position will be updated instead of resetting to the starting position.
  }

  selWorkImgContainer.addEventListener("mousemove", (e) => { //This will track for the mouse movement on the screen and result the mouse position is "e.clientX" and "e.clientY".
    
    const containerRect = selWorkImgContainer.getBoundingClientRect(); //This will create the area around ".sel-work-wrapper" so that effects only works in this area only.

  //This calculates the position of the mouse within a designated area. However, I need to determine its position relative to the container. By subtracting `containerRect.left` (the left edge of the container) from `e.clientX`, the mouse's position is obtained from the left side of the container. Similarly, `targetY` is calculated by subtracting `containerRect.top` from `e.clientY`.
    targetX = e.clientX - containerRect.left;
    targetY = e.clientY - containerRect.top;
  });

  updateImagePosition(); //As I mentioned earlier, this makes the images follow the mouse based on the targetX and targetY values that just calculated.


} else { //If the screen width is below 900 pixels, the event listener will be removed, and the effect will be disabled.
  selWorkImgContainer.removeEventListener("mousemove");
}

