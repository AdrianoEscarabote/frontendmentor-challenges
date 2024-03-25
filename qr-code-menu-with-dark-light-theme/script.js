let qrcode = document.getElementById("qrcode")
let icon = document.getElementById("icon")
let desc = document.getElementById("themeDesc")

function changeTheme() {
    document.body.classList.toggle("light-theme")
    if (document.body.classList.contains("light-theme")) {
        icon.src = "images/moon-solid.svg"
        qrcode.src = "images/image-qr-code.png"
        desc.innerHTML = "Dark theme"
    } else {
        icon.src = "images/sun-solid.svg"
        qrcode.src = "images/image-qr-code-dark.png"
        desc.innerHTML = "Light theme"
    }
}