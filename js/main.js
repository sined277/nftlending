const button = document.querySelector(".menu-btn")
const menuBurger = document.querySelector(".header-content__list")

button.addEventListener("click", () => {
    button.classList.toggle("_active")
    menuBurger.classList.toggle("_active")
})
