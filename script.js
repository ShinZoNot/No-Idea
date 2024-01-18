document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('backgroundAudio');
  
  // Function to handle audio playback
  function startAudio() {
    audio.play().then(() => {
      // Autoplay was successful
    }).catch(error => {
      // Autoplay was prevented
      console.error(error);
    });
  }

  // Add a click event listener to a button
  var startButton = document.getElementById('startButton');
  if (startButton) {
    startButton.addEventListener('click', startAudio);
  }

  // Rest of your existing code for the love message slideshow
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slideInterval = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, slideInterval);
});