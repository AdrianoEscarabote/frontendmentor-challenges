let btn = document.getElementById("button")
let icon = document.getElementById("icon")
let innerTheme = document.getElementById("res")

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme")
    if (document.body.classList.contains("light-theme")) {
        innerTheme.innerHTML = "Dark theme"
        icon.setAttribute('src', 'images/moon.svg')
        button.setAttribute('aria-label', 'activate light mode')
    } else {
        innerTheme.innerHTML = "Light theme"
        icon.setAttribute('src', 'images/sun.svg')
        button.setAttribute('aria-label', 'activate dark mode')
    }
})

let drop1 = document.querySelectorAll(".dropdown")
let arrow1 = document.getElementById("arrow1")

drop1.forEach(element => {
    element.children[0].addEventListener('click', () => {
        let arr = ["none", "block"]

        let arrImg = ["rotate(180deg)", "rotate(0deg)"]

        switch (arrow1.style.transform) {
            case arrImg[0]:
                arrow1.style.transform = arrImg[1]
                break
            case arrImg[1]:
                arrow1.style.transform = arrImg[0]
                break
            default:
                arrow1.style.transform = arrImg[0]
        }
        element.children[0].children

        switch (element.children[1].style.display) {
            case arr[1]:
                element.children[1].style.display = arr[0]
                break
            case arr[0]:
                element.children[1].style.display = arr[1]
                break
            default:
                element.children[1].style.display = arr[1]
        }
    })
})

let drop2 = document.querySelectorAll(".dropdown2")
let arrow2 = document.getElementById("arrow2")

drop2.forEach(element => {
    element.children[0].addEventListener('click', () => {

        let arrImg = ["rotate(180deg)", "rotate(0deg)"]

        switch (arrow2.style.transform) {
            case arrImg[0]:
                arrow2.style.transform = arrImg[1]
                break
            case arrImg[1]:
                arrow2.style.transform = arrImg[0]
                break
            default:
                arrow2.style.transform = arrImg[0]
        }

        let arr = ["none", "block"]

        switch (element.children[1].style.display) {
            case arr[1]:
                element.children[1].style.display = arr[0]
                break
            case arr[0]:
                element.children[1].style.display = arr[1]
                break
            default:
                element.children[1].style.display = arr[1]
        }
    })
})

const btnMobile = document.getElementById("btn-mobile")

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault()
    let iconMenu = document.getElementById("iconMenu")
    let nav = document.getElementById("nav")
    nav.classList.toggle("active")
    if (nav.classList.contains("active")) {
        iconMenu.setAttribute("src", "images/icon-close-menu.svg")
    } else {
        iconMenu.setAttribute("src", "images/icon-menu.svg")
    }

    const active = nav.classList.contains("active")
    if (active) {
        event.currentTarget.setAttribute("aria-label", "close menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "open menu")
    }


    event.currentTarget.setAttribute("aria-expanded", active)
}