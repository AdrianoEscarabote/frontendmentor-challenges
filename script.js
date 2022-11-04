// input radio
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        arr
            .filter(function (item) {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "0";
            });
    });
});

// change theme
arr.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.dataset.theme === "theme-1") {
            document.body.classList.remove("theme-2")
            document.body.classList.remove("theme-3")
            document.body.classList.add("theme-1")
        } else if (element.dataset.theme === "theme-2") {
            document.body.classList.remove("theme-3")
            document.body.classList.remove("theme-1")
            document.body.classList.add("theme-2")
        } else {
            document.body.classList.remove("theme-1")
            document.body.classList.remove("theme-2")
            document.body.classList.add("theme-3")
        }
    })
})

// calc 
const buttonKey = document.querySelectorAll(".btnKey")
const numberDisplay = document.getElementById("numberRes")
const upNumber = document.getElementById("up")
const del = document.getElementById("del")
const reset = document.getElementById("reset")
const equal = document.getElementById("equal")
const addition = document.getElementById("addition")

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]

// deleting numbers
del.addEventListener("click", () => {
    numberDisplay.innerText = numberDisplay.textContent.slice(0, -1)
})

document.body.addEventListener("keydown", (ev) => {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        numberDisplay.innerText += ev.key
    }
    switch (ev.key) {
        case "Backspace":
            del.focus()
            numberDisplay.innerText = numberDisplay.textContent.slice(0, -1)
            break
        case "Enter":
            equal.focus()
            break
        default:
            break
    }
})

let numberForCalc = ""

buttonKey.forEach((element) => {
    element.addEventListener("click", () => {
        numberDisplay.innerText += element.value
        numberForCalc += element.value
        console.log(numberForCalc)
    })
})

// reset button
reset.addEventListener("click", () => {
    numberDisplay.innerText = ""
    upNumber.innerText = ""
    numberForCalc = ""
})