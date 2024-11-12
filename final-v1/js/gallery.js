// Log to confirm script is loaded
console.log("gallery.js loaded");

// Function to show the selected image based on the index
function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    const dots = document.querySelectorAll('.dot');

    // Remove 'active' class from all images and dots
    images.forEach(image => image.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add 'active' class to the selected image and dot
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initial setup to make the first image and dot active by default
document.addEventListener('DOMContentLoaded', () => {
    showImage(0); // Ensure the first image shows by default
});
