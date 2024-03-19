let btn = document.getElementById("button")
let res = document.getElementById("res")

btn.addEventListener('click', function validateEmail() {
    let email = document.getElementById("email")
    let validation
    let re = /\S+@\S+\.\S+/;

    validation = re.test(email.value);
    console.log(validation)

    if (validation === true) {
        email.setAttribute('style', 'border: 3px solid #4f7df3;')
        document.getElementById("card").style.opacity = 1
        document.querySelector("section").style.opacity = 0.2
        document.getElementById("card").style.zIndex = 1
        email.value = ""
        res.innerHTML = ""
    } else {
        email.setAttribute('style', 'border: 3px solid #ff5263;')
        res.innerHTML = "please enter a valid email address!"
    }
})

let back = document.getElementById("back")

back.addEventListener('click', () => {
    document.getElementById("card").style.opacity = 0
    document.querySelector("section").style.opacity = 1
    document.getElementById("card").style.zIndex = -1
})

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow")
});