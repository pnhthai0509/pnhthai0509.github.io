// This script enables horizontal scrolling in response to vertical scrolling or when using the mouse wheel.
const galleryContainer = document.querySelector(".project-img-container");
const gallery = document.querySelector(".gallery");

galleryContainer.addEventListener("wheel", (e) => { //This will track for mouse scroll movemnt.
  e.preventDefault(); // To gain complete control over the scroll behavior, this code will prevent the default scrolling action from occurring.

  const scrollAmount = e.deltaY * 20; // This code tracks the amount of vertical scrolling on the Y-axis. When scrolling down, the value is positive, while scrolling up results in a negative value. I observed that the gallery moved rather slowly during scrolling, so I increased the scroll sensitivity by multiplying the value by 20.

  if (window.innerWidth > 900) { //This will check if the screen width is greater than 900px.
    gallery.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
      //If the screen width exceeds 900 px, the gallery will scroll horizontally by the calculated "scrollAmount." I noticed that the scrolling was somewhat abrupt, so I implemented a smooth scrolling behavior to enhance the user experience. This smooth effect applies only to mouse wheel interactions, as trackpads already provide a natural smooth scrolling experience.
    });
  } else {
      // If the screen width is below 900 pixels, the gallery will revert to the traditional top-to-bottom scrolling behavior.
    gallery.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  }
});
