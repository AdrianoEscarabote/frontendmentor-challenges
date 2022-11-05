const buttonKey = document.querySelectorAll(".btnKey")
const numberDisplay = document.getElementById("numberRes")
const upNumber = document.getElementById("up")
const del = document.getElementById("del")
const reset = document.getElementById("reset")
const equal = document.getElementById("equal")
const addition = document.getElementById("addition")
const subtraction = document.getElementById("subtraction")
const division = document.getElementById("division")
const multiplication = document.getElementById("multiplication")
let num1 = ""
let upNum = ""

// input radio
const buttons = document.getElementsByClassName("button");
const arr = [...buttons];

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

// localStorage.setItem("themeUser", document.body.className)
// document.body.dataset.theme = localStorage.getItem("themeUser")

// document.getElementById("localBtn").addEventListener("click", () => {
//     const input = document.getElementById("local")
//     localStorage.setItem("info", input.value)
//     input.value = ""
//   })

//   document.getElementById("readLocal").addEventListener("click", () => {
//     const info = localStorage.getItem("info")
//     alert("A informção guardadaa no local storage é: " + info)
//   })

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

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]

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

class getNum {
    getKey1() {
        buttonKey.forEach((element) => {
            element.addEventListener("click", () => {
                numberDisplay.innerText += element.value
                num1 += numberDisplay.textContent
                return num1
            })
        })
    }
    addition() {
        addition.addEventListener("click", () => {
            if (upNumber.textContent || numberDisplay.textContent) {
                let result = Number(upNum) + Number(numberDisplay.textContent)
                upNumber.innerText = `${result} + `
                upNum = result
                // localStorage.setItem("upNum", upNum)
            } else {
                upNum = num1
                upNumber.innerText = `${upNum} + `
            }
            numberDisplay.innerText = ""
        })
    }
    subtraction() {
        subtraction.addEventListener("click", () => {
            if (upNumber.textContent || numberDisplay.textContent) {
                let result = Number(upNum) - Number(numberDisplay.textContent)
                upNumber.innerText = `${result} - `
                upNum = result
            } else {
                upNum = num1
                upNumber.innerText = `${upNum} - `
            }
            numberDisplay.innerText = ""
        })
    }
    division() {
        division.addEventListener("click", () => {
            if (upNumber.textContent || numberDisplay.textContent) {
                let result = Number(upNum) / Number(numberDisplay.textContent)
                upNumber.innerText = `${result} / `
                upNum = result
            } else {
                upNum = num1
                upNumber.innerText = `${upNum} / `
            }
            numberDisplay.innerText = ""
        })
    }
    multiplication() {
        multiplication.addEventListener("click", () => {
            if (upNumber.textContent || numberDisplay.textContent) {
                let result = Number(upNum) * Number(numberDisplay.textContent)
                upNumber.innerText = `${result} * `
                upNum = result
            } else {
                upNum = num1
                upNumber.innerText = `${upNum} * `
            }
            numberDisplay.innerText = ""
        })
    }
    reset() {
        reset.addEventListener("click", () => {
            numberDisplay.innerText = ""
            upNumber.innerText = ""
            num1 = ""
            upNum = ""
        })
    }
    del() {
        del.addEventListener("click", () => {
            numberDisplay.innerText = numberDisplay.textContent.slice(0, -1)
        })
    }
}

const app = new getNum()
const main = () => {
    app.getKey1()
    app.addition()
    app.subtraction()
    app.division()
    app.multiplication()
    app.reset()
    app.del()
}

main()