// Hamberger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Footer Copyright Date
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;


// Highlight Filter Labels
const designLabel = document.getElementById("label-design");
const frontEndLabel = document.getElementById("label-front-end");
const viewAllLabel = document.getElementById("label-view-all");

const designRadio = document.getElementById("design");
const frontEndRadio = document.getElementById("front-end");
const viewAllRadio = document.getElementById("view-all");

designLabel.addEventListener('click', highlightDesign);
frontEndLabel.addEventListener('click', highlightFrontEnd);
viewAllLabel.addEventListener('click', highlightViewAll);

function highlightDesign() {
    designLabel.classList.toggle("label-highlight");
    frontEndLabel.classList.remove("label-highlight");
    viewAllLabel.classList.remove("view-all-highlight")
}

function highlightFrontEnd() {
    frontEndLabel.classList.toggle("label-highlight");
    designLabel.classList.remove("label-highlight");
    viewAllLabel.classList.remove("view-all-highlight")
}

function highlightViewAll() {
    viewAllLabel.classList.toggle("view-all-highlight")
    frontEndLabel.classList.remove("label-highlight");
    designLabel.classList.remove("label-highlight");
}