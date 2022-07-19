AOS.init();

const navHamburger = document.querySelector("#checkbox_toggle");
const menu = document.querySelector("#menu");

navHamburger.addEventListener("click", () => {
    console.log(navHamburger.checked);
    if (!navHamburger.checked) {
        menu.classList.add("navReverse");
    }
    setTimeout(() => {
        menu.classList.remove("navReverse");
        menu.style.display = "none";
    }, 500);
})