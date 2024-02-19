let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
    if (menuBtnIcon.classList.contains("fa-bars")) {
        menu.style.left = "0";
        menuBtnIcon.classList.remove("fa-bars");
        menuBtnIcon.classList.add("fa-times");
    } else {
        menu.style.left = "-256px";
        menuBtnIcon.classList.remove("fa-times");
        menuBtnIcon.classList.add("fa-bars");
    }
});
