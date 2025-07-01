// ------------------ DÉCLARATION DES VARIABLES ------------------ //

const openList = document.querySelector(".hamburger-icon");
const listNav = document.querySelector(".hamburger-list");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");
const hamburgerLinks = document.querySelectorAll(".menuLinks");
const headerContainer = document.querySelector(".header-container");
const panierIcon = document.querySelector(".fa-shopping-cart");


// ------------------ MENU HAMBURGER ------------------ //

if (openList && listNav && overlay) {
    openList.addEventListener("click", () => {
        listNav.classList.add("open");
        overlay.classList.add("overlay-open");
        document.body.classList.add("no-scroll");
    });
}

// ------------------ FERMETURE MENU / OVERLAY ------------------ //

function closeMenu() {
    if (listNav) listNav.classList.remove("open");
    if (overlay) overlay.classList.remove("overlay-open");
    document.body.classList.remove("no-scroll");
}

if (overlay) {
    overlay.addEventListener("click", closeMenu);
}

if (closeIcon) {
    closeIcon.addEventListener("click", closeMenu);
}

if (hamburgerLinks.length > 0) {
    hamburgerLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

//-----------------------PAGE PANIER-------------------------------------//

panierIcon.addEventListener("click", () => {
  window.location.href = "panier.html";
});

//-----------------------PAGE PANIER-------------------------------------//


// ------------------ BACKGROUND AU SCROLL ------------------ //

if (headerContainer) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerContainer.classList.add("scrolled");
        } else {
            headerContainer.classList.remove("scrolled");
        }
    });
}

// ------------------ BACKGROUND AU SCROLL ------------------ //
