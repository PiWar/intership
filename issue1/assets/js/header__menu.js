const menu_item = document.querySelectorAll(".header__menu .menu-item")
let active_menu_item = menu_item[0]

menu_item.forEach(el => {
    el.onclick = e => {
        active_menu_item.classList.remove("active")
        active_menu_item = e.target
        active_menu_item.classList.add("active")
    }
})

// set first menu-item as default
active_menu_item.classList.add("active")