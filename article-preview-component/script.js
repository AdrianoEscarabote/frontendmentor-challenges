let click = document.getElementById("teste")
let aparecer = document.getElementById("apareci").style

let arr = ['1', '0']

function showLinks() {
    switch (aparecer.opacity) {
        case arr[0]:
            aparecer.opacity = arr[1]
            break
        case arr[1]:
            aparecer.opacity = arr[0]
            break
        default:
            aparecer.opacity = arr[0]
    }
}

click.addEventListener('click', showLinks)