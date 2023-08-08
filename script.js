// Nav - Hamberger Menu Open/Close
const hamburgerMenu = (() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    const mobileMenu = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
})();


// Footer - Copyright Date
const footerDate = (() => {
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
})();


// Filter-section - Highlight Labels
const highlightLabels = (() => {
const designLabel = document.getElementById("label-design");
const frontEndLabel = document.getElementById("label-front-end");
const viewAllLabel = document.getElementById("label-view-all");

const designRadio = document.getElementById("design");
const frontEndRadio = document.getElementById("front-end");
const viewAllRadio = document.getElementById("view-all");

const highlightDesign = () => {
    designRadio.checked = true;
    designLabel.classList.add("label-highlight");
    frontEndLabel.classList.remove("label-highlight");
    viewAllLabel.classList.remove("view-all-highlight");
}

const highlightFrontEnd = () => {
    frontEndRadio.checked = true;
    frontEndLabel.classList.add("label-highlight");
    designLabel.classList.remove("label-highlight");
    viewAllLabel.classList.remove("view-all-highlight");
}

const highlightViewAll = () => {
    viewAllRadio.checked = true;
    viewAllLabel.classList.add("view-all-highlight");
    frontEndLabel.classList.remove("label-highlight");
    designLabel.classList.remove("label-highlight");
}

designLabel.addEventListener('click', highlightDesign);
frontEndLabel.addEventListener('click', highlightFrontEnd);
viewAllLabel.addEventListener('click', highlightViewAll);
})();