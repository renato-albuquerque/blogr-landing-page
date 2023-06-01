// VARIABLES

// MOBILE VERSION

const hamburgerMenu = document.querySelector(".imageMenuHamburger")
const menuDropdownMobile = document.querySelector(".menuDropdownMobile")
const mobileItem = document.querySelector(".mobileItem")
const mobileSubitemProduct = document.querySelector(".mobileSubitemProduct")
const mobileSubitemCompany = document.querySelector(".mobileSubitemCompany")
const mobileSubitemConnect = document.querySelector(".mobileSubitemConnect")
const arrowProduct = document.querySelector(".arrowProduct")
const arrowCompany = document.querySelector(".arrowCompany")
const arrowConnect = document.querySelector(".arrowConnect")

// DESKTOP VERSION

const desktopSubitemProduct = document.querySelector(".desktopSubitemProduct")
const desktopSubitemCompany = document.querySelector(".desktopSubitemCompany")
const desktopSubitemConnect = document.querySelector(".desktopSubitemConnect")
const desktopArrowProduct = document.querySelector(".desktopArrowProduct")
const desktopArrowCompany = document.querySelector(".desktopArrowCompany")
const desktopArrowConnect = document.querySelector(".desktopArrowConnect")

// FUNCTIONS MOBILE VERSION

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

// FUNCTIONS DESKTOP VERSION

function showProductSubitemDesktop() {
    desktopSubitemProduct.classList.toggle("desktopSubitemProductOpen")
    desktopArrowProduct.classList.toggle("arrow")
}

function showCompanySubitemDesktop() {
    desktopSubitemCompany.classList.toggle("desktopSubitemCompanyOpen")
    desktopArrowCompany.classList.toggle("arrow")
}

function showConnectSubitemDesktop() {
    desktopSubitemConnect.classList.toggle("desktopSubitemConnectOpen")
    desktopArrowConnect.classList.toggle("arrow")
}