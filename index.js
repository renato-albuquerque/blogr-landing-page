// VARIABLES

const hamburgerMenu = document.querySelector(".imageMenuHamburger")
const menuDropdownMobile = document.querySelector(".menuDropdownMobile")

// FUNCTIONS

function showMobileMenu() {
    menuDropdownMobile.classList.toggle("open")

    if (menuDropdownMobile.classList.contains("open")) {
        hamburgerMenu.src = "files/images/icon-close.svg"
    } else {
        hamburgerMenu.src = "files/images/icon-hamburger.svg"
    }
}

