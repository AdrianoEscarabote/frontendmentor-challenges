let icon = document.getElementById("icon")
let pDesc = document.getElementById("description")
let button = document.getElementById("button")

function changeTheme() {
    document.body.classList.toggle("light-theme")
    if (document.body.classList.contains("light-theme")) {
        icon.setAttribute('src', 'images/moon.svg')
        button.setAttribute('aria-label', 'ativate dark mode')
        pDesc.innerHTML = `Dark theme`
    } else {
        icon.setAttribute('src', 'images/sun.svg')
        button.setAttribute('aria-label', 'ativate light mode')
        pDesc.innerHTML = `Light theme`
    }
}