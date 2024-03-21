let btn = document.getElementById("btn")
let icon = document.getElementById("icon")
let list = document.getElementById("list")

btn.addEventListener("click", () => {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme")
        btn.setAttribute("aria-label", "activate light mode")
        icon.setAttribute("src", "assets/images/sun.svg")
    } else {
        document.body.classList.add("light-theme")
        btn.setAttribute("aria-label", "activate dark mode")
        icon.setAttribute("src", "assets/images/moon.svg")
    }
})

icon.addEventListener("mouseover", () => {
    icon.style.transform = "rotate(180deg)"
})

icon.addEventListener("mouseout", () => {
    icon.style.transform = "rotate(0deg)"
})

icon.addEventListener("touchstart", () => {
    icon.style.transform = "rotate(180deg)"
})

icon.addEventListener("touchend", () => {
    icon.style.transform = "rotate(0)"
})

const btnMenu = document.getElementById("btnMenu")
const menu = document.getElementById("menu")
const btnImg = document.getElementById("iconMenu")

btnMenu.addEventListener("click", toggleMenu)
btnMenu.addEventListener("touchstart", toggleMenu)

function toggleMenu(event) {
    if (event.type === "touchstart") {
        event.preventDefault()
        list.classList.toggle("active")
        const active = list.classList.contains("active")
        if (active) {
            event.currentTarget.setAttribute("aria-label", "close menu")
            list.appendChild(btnMenu)
            btnImg.setAttribute("src", "assets/images/icon-menu-close.svg")
        } else {
            event.currentTarget.setAttribute("aria-label", "open menu")
            btnImg.setAttribute("src", "assets/images/icon-menu.svg")
        }

        menu.appendChild(btnMenu)
        event.currentTarget.setAttribute("aria-expanded", active)
    }
}