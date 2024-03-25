let btn = document.getElementById("button")
let res = document.getElementById("res")

btn.addEventListener('click', function validateEmail() {
    let email = document.getElementById("email")
    let validation
    let re = /\S+@\S+\.\S+/;

    validation = re.test(email.value);

    if (validation === true) {
        email.value = ""
        email.setAttribute('style', 'border: 4px solid #63E1D9;')
        document.querySelector("header").style.opacity = 0.2
        document.getElementById("mainContent").style.opacity = 0.2
        document.querySelector("footer").style.opacity = 0.2
        document.body.style.overflow = "hidden"
        document.getElementById("card").style.zIndex = 1
        document.getElementById("card").style.opacity = 1
        res.innerHTML = ""
    } else {
        email.setAttribute('style', 'border: 4px solid red;')
        res.innerHTML = "please enter a valid email address!"
    }
})

let back = document.getElementById("back")

back.addEventListener('click', () => {
    document.querySelector("header").style.opacity = 1
    document.getElementById("mainContent").style.opacity = 1
    document.querySelector("footer").style.opacity = 1
    document.body.style.overflow = "visible"
    document.getElementById("card").style.zIndex = -1
    document.getElementById("card").style.opacity = 0
})