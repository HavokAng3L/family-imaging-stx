const button = document.getElementById("mobile_menu_button");

const menu = document.getElementById("nav")

const closeButton = document.getElementById("mobile_menu_close_button")

button.addEventListener("click", () => {
    menu.classList.remove("navigation_toggle")
    button.classList.add("navigation_toggle")
})

closeButton.addEventListener("click", (e) => {
    menu.classList.add("navigation_toggle");
    button.classList.remove("navigation_toggle")
})