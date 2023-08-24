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
