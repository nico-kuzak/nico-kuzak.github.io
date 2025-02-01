// script.js

// 1. Create an array with the file paths of your images
// (Make sure they match the actual filenames in your /images/ folder.)
const images = [
    "images/nico1.jpg",
    "images/nico2.jpg",
    "images/nico3.jpg",
    "images/nico4.jpg"
  ];
  
// 2. Wait until the DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Grab references to our DOM elements
    const randomImageButton = document.querySelector("#randomImageButton");
    const randomImage = document.querySelector("#randomImage");
  
    // 3. Immediately display a random image on load
    const initialIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[initialIndex];
  
    // 4. When the button is clicked, show a new random image
    randomImageButton.addEventListener("click", function() {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImage.src = images[randomIndex];
    });
  });
  