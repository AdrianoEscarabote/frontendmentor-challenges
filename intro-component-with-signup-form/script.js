(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } 
            form.classList.add('was-validated')
        }, false)
    })
})()

let password = document.getElementById("InputPassword1")
let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    if (password.type === "password") {
        btn.children[0].setAttribute("src", "images/eye-block.svg")
        password.type = "string"
    } else {
        password.type = "password"
        btn.children[0].setAttribute("src", "images/eye.svg")
    }
})