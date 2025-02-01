// script.js

// 1. Create an array with the file paths of your images
// (Make sure they match the actual filenames in your /images/ folder.)
const images = [
    "images/nico1.jpg",
    "images/nico2.jpg",
    "images/nico3.jpg",
    "images/nico4.jpg"
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const rotatingImage = document.getElementById("rotatingImage");
  
    // Helper function to get a random image from the array
    function getRandomImage() {
      return images[Math.floor(Math.random() * images.length)];
    }
  
    // 3. Set an initial random image
    rotatingImage.src = getRandomImage();
  
    // 4. Automatically update the image every 5 seconds (for example)
    setInterval(() => {
      rotatingImage.src = getRandomImage();
    }, 2000); // 5000 ms = 5 seconds
  });
  