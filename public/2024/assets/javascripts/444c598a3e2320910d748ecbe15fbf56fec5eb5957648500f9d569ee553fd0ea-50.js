function adjustBackgroundPosition() {
  const imageAspectRatio = 1024 / 1500; // Width / Height of the image
  const viewportAspectRatio = window.innerWidth / window.innerHeight;
  
  const mountains = document.getElementById("mountains")

  if(viewportAspectRatio > 1)
  {
    mountains.style.backgroundImage = `url(/2024/images/mountains-blue-horizontal-e3917e34.jpg)`
  }
  else
  {
    mountains.style.backgroundImage = `url(/2024/images/mountains-blue-horizontal-4bdea443.jpg)`
  }

  if (viewportAspectRatio > imageAspectRatio) {
    // If the viewport is wider relative to its height than the image, align the image to the bottom
    mountains.style.backgroundPosition = 'center top';
  } else {
    // If the viewport is taller relative to its width than the image, align the image to the top
    mountains.style.backgroundPosition = 'center bottom';
  }
}

document.addEventListener("DOMContentLoaded", function(){
  // Adjust background on initial load
  adjustBackgroundPosition();

  // Adjust background whenever the window is resized
  window.addEventListener('resize', adjustBackgroundPosition);
})