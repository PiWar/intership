const menuItems = document.querySelectorAll(".header__menu .menu-item")
let activeMenuItem = menuItems[0]

menuItems.forEach(el => {
    el.onclick = e => {
        activeMenuItem.classList.remove("active")
        activeMenuItem = e.target
        activeMenuItem.classList.add("active")
    }
})

// set first menu-item as default
activeMenuItem.classList.add("active")