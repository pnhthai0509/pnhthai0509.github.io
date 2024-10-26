const galleryContainer = document.querySelector(".project-img-container");
const gallery = document.querySelector(".gallery");

galleryContainer.addEventListener("wheel", (event) => {
  event.preventDefault();

  const scrollAmount = event.deltaY * 30;

  if (window.innerWidth > 900) {
    gallery.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  } else {
    gallery.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  }
});
