const q = (q) => document.querySelector(q);
const qAll = (q) => document.querySelectorAll(q);

/*************** 햄버거 메뉴 제어 ***************/
const hamburger = q(".hamburger");
const navSliderWrap = q(".nav-slider-wrap");
hamburger.addEventListener("click", toggleHamburgerNav);

function toggleHamburgerNav() {
    hamburger.classList.toggle("on");
    navSliderWrap.classList.toggle("on");
}

