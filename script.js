let icon = document.getElementById("icon")
let button = document.getElementById("changeModeButton")
let logoNav = document.getElementById("logoNav")

function changeMode() {
    document.body.classList.toggle("light-theme")
    if (document.body.classList.contains("light-theme")) {
        icon.setAttribute('src', 'images/moon.svg')
        button.setAttribute('aria-label', 'activate dark mode')
        logoNav.setAttribute('src', 'images/logo-dark.svg')
    } else {
        icon.setAttribute('src', 'images/sun.svg')
        button.setAttribute('aria-label', 'activate light mode')
        logoNav.setAttribute('src', 'images/logo-dark.svg')
        logoNav.setAttribute('src', 'images/logo-light.svg')
    }
}