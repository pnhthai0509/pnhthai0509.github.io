const selWorkImgContainer = document.querySelector(".sel-work-container");
const selWorkImages = document.querySelectorAll(".sel-work-img");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function updateImagePosition() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  selWorkImages.forEach((img) => {
    img.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });

  requestAnimationFrame(updateImagePosition);
}

selWorkImgContainer.addEventListener("mousemove", (e) => {
  const containerRect = selWorkImgContainer.getBoundingClientRect();
  targetX = e.clientX - containerRect.left;
  targetY = e.clientY - containerRect.top;
});

updateImagePosition();
