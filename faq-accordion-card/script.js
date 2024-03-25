let div = document.querySelectorAll(".details")

div.forEach(open => {
    open.addEventListener('click', () => {
        if (!open.children[0].classList.contains("transform") || open.children[0].classList.contains("transform")) {
            open.children[0].classList.toggle("transform")
        }
    })
})