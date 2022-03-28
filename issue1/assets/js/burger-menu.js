const burgerMenu = document.getElementById("burger-menu");
const headerContent = document.getElementById("header__content")
const menuItems = headerContent.querySelectorAll(".header__menu .menu-item")
const body = document.body
const mediaOpenBurgerMenu = 767


function toggleClass() {
  if (body.offsetWidth <= mediaOpenBurgerMenu) {
    // open menu and block scroll body
    burgerMenu.classList.toggle("active");
    headerContent.classList.toggle("active")
    body.classList.toggle("block-scroll")
  }
}

burgerMenu.addEventListener("click", toggleClass)
menuItems.forEach(item => {
  item.addEventListener("click", toggleClass)
})
