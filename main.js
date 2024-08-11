//let navContent = document.getElementById("mobile-nav-content");

function openMenu() {
  document.getElementById("open-btn").style.display ='none';
  document.getElementById("close-btn").style.display ='inline';
  document.getElementById("mobile-nav-content").style.display ='flex';
}
function closeMenu() {
  document.getElementById("open-btn").style.display ='inline';
  document.getElementById("close-btn").style.display ='none';
  document.getElementById("mobile-nav-content").style.display ='none';
}
