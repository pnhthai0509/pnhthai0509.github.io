// script.js

const galleryContainer = document.querySelector('.gallery-container');
const gallery = document.querySelector('.gallery');

galleryContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior

    // Calculate the new scroll position
    const scrollAmount = event.deltaY * 10; // Amount to scroll horizontally
    const newScrollLeft = gallery.scrollLeft + scrollAmount;

    // Smooth scroll to the new position
    gallery.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth' // Enables smooth scrolling
    });
});