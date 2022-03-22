const html_tag = document.querySelector("html");
const burger_menu = document.getElementById("burger-menu");
const header_content = document.getElementById("header__content")
const menu_items = header_content.querySelectorAll(".header__menu .menu-item")

function toggle_class() {
    burger_menu.classList.toggle("active");
    header_content.classList.toggle("active")
    html_tag.classList.toggle("block-scroll")
}

burger_menu.onclick = toggle_class
Array.prototype.forEach.call(menu_items, item => {
  item.addEventListener("click", toggle_class)
})
