const main = document.querySelector(".rate")
const thanks = document.querySelector(".thanks")
const btnSubmit = document.getElementById("submit")
const btnBack = document.getElementById("back")
const res = document.getElementById("res")
const btns = document.querySelectorAll(".btn")

btns.forEach(rate => {
    rate.addEventListener('click', () => {
        res.innerHTML = rate.value
    })
})

btnSubmit.addEventListener('click', () => {
    thanks.classList.remove("hidden")
    main.style.opacity = 0
    main.style.position = "absolute"
    main.style.zIndex = -1
})

btnBack.addEventListener('click', () => {
    thanks.classList.add("hidden")
    main.style.opacity = 1
    main.style.position = "relative"
    main.style.zIndex = 1
})