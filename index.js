window.addEventListener('DOMContentLoaded', function() {
  var topCenterDetails = document.querySelector('.top-center-details');
  topCenterDetails.classList.add('show'); // Add the 'show' class to initiate the animation
});

function openNav() {
  // Get the sidebar element and adjust its width
  const sideBar = document.getElementById("side-bar");
  const contentArea = document.getElementById("content-area");
  
  sideBar.style.width = '100%';
  sideBar.style.height = '40%';
  contentArea.style.marginRight = '0';
}

function closeNav() {
  // Get the sidebar element and adjust its width
  const sideBar = document.getElementById("side-bar");
  const contentArea = document.getElementById("content-area");
  const closeBtn = document.getElementById("close-btn");
  
  sideBar.style.width = '0';
  contentArea.style.marginRight = '0';
  closeBtn.style.color = "white";
}
// new function //

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var circles = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 2 seconds
  circles[slidePosition-1].className += " enable";
} 

/*
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
} 

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var circles = document.getElementsByClassName("dots");

  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
      
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
 
  
} */