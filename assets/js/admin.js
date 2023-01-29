// Sidebar Responsiveness
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const navOverlay = document.querySelector(".nav-overlay");

function toggleSidebar() {
  sideBar.classList.toggle("open");
  navOverlay.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleSidebar);
navOverlay.addEventListener("click", toggleSidebar);
