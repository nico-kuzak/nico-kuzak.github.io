// script.js

// 1. Create an array with the file paths of your images
// (Make sure they match the actual filenames in your /images/ folder.)
const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.png"
  ];
  
  // 2. Wait until the DOM content has loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Grab references to our DOM elements
    const randomImageButton = document.querySelector("#randomImageButton");
    const randomImage = document.querySelector("#randomImage");
  
    // 3. When the button is clicked...
    randomImageButton.addEventListener("click", function() {
      // a) Pick a random index in the array
      const randomIndex = Math.floor(Math.random() * images.length);
      // b) Update the <img> src to the randomly chosen file
      randomImage.src = images[randomIndex];
    });
  });
  