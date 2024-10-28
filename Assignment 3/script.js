if (window.innerWidth > 900) {
  const selWorkImgContainer = document.querySelector(".sel-work-wrapper");
  const selWorkImages = document.querySelectorAll(".sel-work-img");

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  function updateImagePosition() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    selWorkImages.forEach((img) => {
      img.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    });

    requestAnimationFrame(updateImagePosition);
  }

  selWorkImgContainer.addEventListener("mousemove", (e) => {
    const containerRect = selWorkImgContainer.getBoundingClientRect();
    targetX = e.clientX - containerRect.left;
    targetY = e.clientY - containerRect.top;
  });

  updateImagePosition();
} else {
  selWorkImgContainer.addEventListener("mousemove");
}

