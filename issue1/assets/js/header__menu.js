const headerMenuItems = document.querySelectorAll(".header__menu .menu-item")
let activeMenuItem = headerMenuItems[0]

headerMenuItems.forEach(el => {
  el.addEventListener("click", e => {
    activeMenuItem.classList.remove("active")
    activeMenuItem = e.target
    activeMenuItem.classList.add("active")
  })
})

// set first menu-item as default
activeMenuItem.classList.add("active")