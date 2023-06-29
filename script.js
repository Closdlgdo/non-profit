// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the slide-in effect
function handleSlideIn() {
  var slideInElements = document.querySelectorAll('.slide-in');
  slideInElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Function to debounce the scroll event
function debounce(func, wait = 20) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// Function to handle resizing of the window
function handleResize() {
  handleSlideIn();
}

// Event listeners for scrolling and resizing with debouncing
window.addEventListener('scroll', debounce(handleSlideIn));
window.addEventListener('resize', debounce(handleResize));

// Initial check for slide-in elements on page load
document.addEventListener('DOMContentLoaded', handleSlideIn);
