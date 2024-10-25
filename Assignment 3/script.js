// const selWorkImgContainer = document.querySelector('.sel-work-container');
// const selWorkImg = document.querySelector('.sel-work-img');

// let targetX = 0;
// let targetY = 0;
// let currentX = 0;
// let currentY = 0;

// selWorkImgContainer.addEventListener('mousemove', (e) => {
//   const containerRect = selWorkImgContainer.getBoundingClientRect();
//   const imgWidth = selWorkImg.offsetWidth;
//   const imgHeight = selWorkImg.offsetHeight;
  
//   targetX = e.clientX - containerRect.left - imgWidth / 2;
//   targetY = e.clientY - containerRect.top - imgHeight / 2;

//   currentX += (targetX - currentX) * 0.1; // Smooth transition by adding a fraction of the difference
//   currentY += (targetY - currentY) * 0.1; // between current and target positions

//   selWorkImg.style.transform = `translate(${currentX}px, ${currentY}px)`;
// });

const selWorkImgContainer = document.querySelector('.sel-work-container');
const selWorkImages = document.querySelectorAll('.sel-work-img'); // Select all images

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function updateImagePosition() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;
  
  selWorkImages.forEach(img => {
    img.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });
  
  requestAnimationFrame(updateImagePosition);
}

selWorkImgContainer.addEventListener('mousemove', (e) => {
  const containerRect = selWorkImgContainer.getBoundingClientRect();
  targetX = e.clientX - containerRect.left;
  targetY = e.clientY - containerRect.top;
});

updateImagePosition(); // Start updating the image position
``