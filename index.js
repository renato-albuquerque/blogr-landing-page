// VARIABLES

const hamburgerMenu = document.querySelector(".imageMenuHamburger")
const menuDropdownMobile = document.querySelector(".menuDropdownMobile")
const mobileItem = document.querySelector(".mobileItem")
const mobileSubitemProduct = document.querySelector(".mobileSubitemProduct")
const mobileSubitemCompany = document.querySelector(".mobileSubitemCompany")
const mobileSubitemConnect = document.querySelector(".mobileSubitemConnect")
const arrowProduct = document.querySelector(".arrowProduct")
const arrowCompany = document.querySelector(".arrowCompany")
const arrowConnect = document.querySelector(".arrowConnect")

// FUNCTIONS

function showMobileMenu() {
    menuDropdownMobile.classList.toggle("open")

    if (menuDropdownMobile.classList.contains("open")) {
        hamburgerMenu.src = "files/images/icon-close.svg"
    } else {
        hamburgerMenu.src = "files/images/icon-hamburger.svg"
    }
}

function showProductSubitem() {
    mobileSubitemProduct.classList.toggle("mobileSubitemProductOpen")
    arrowProduct.classList.toggle("arrow")
}

function showCompanySubitem() {
    mobileSubitemCompany.classList.toggle("mobileSubitemCompanyOpen")
    arrowCompany.classList.toggle("arrow")
}

function showConnectSubitem() {
    mobileSubitemConnect.classList.toggle("mobileSubitemConnectOpen")
    arrowConnect.classList.toggle("arrow")
}
