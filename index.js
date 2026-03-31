
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-links_visible");
});