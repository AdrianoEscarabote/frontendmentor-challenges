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

// change theme

const storageKey = 'theme-preference'
const theme = {
    value: getColorPreference(),
}

function getColorPreference() {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setPreference() {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

function reflectPreference() {
    document.body.setAttribute("data-theme", theme.value)
    switch (document.body.dataset.theme) {
        case "theme-1":
            document.body.classList.remove("theme-2")
            document.body.classList.remove("theme-3")
            document.body.classList.add("theme-1")
            break
        case "theme-2":
            document.body.classList.remove("theme-3")
            document.body.classList.remove("theme-1")
            document.body.classList.add("theme-2")
            break
        case "theme-3":
            document.body.classList.remove("theme-1")
            document.body.classList.remove("theme-2")
            document.body.classList.add("theme-3")
            break
    }
}
reflectPreference()

window.onload = () => {
    reflectPreference()
    arr.forEach(element => {
        element.addEventListener("click", (event) => {
            theme.value = event.target.value
            element.setAttribute("checked", "")
            setPreference()
        })
    })
}

// calc 

class getNum {
    keyboardNumbers() {
        const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]

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
                    validateCalc()
                    equal.focus()
                    break
                default:
                    break
            }
        })
    }
    getKey1() {
        buttonKey.forEach((element) => {
            element.addEventListener("click", () => {
                numberDisplay.innerText += element.value
                num1 += element.value
                return num1
            })
        })
    }
    addition() {
        addition.addEventListener("click", additionFuncinality)
    }
    subtraction() {
        subtraction.addEventListener("click", subtractionFuncionality)
    }
    division() {
        division.addEventListener("click", divisionFuncionality)
    }
    multiplication() {
        multiplication.addEventListener("click", multiplicationFuncinality)
    }
    equal() {
        equal.addEventListener("click", validateCalc)
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

function additionFuncinality() {
    if (upNumber.textContent || numberDisplay.textContent) {
        let result = Number(upNum) + Number(numberDisplay.textContent)
        upNumber.innerText = `${Number(result).toFixed(2)} + `
        upNum = result
    } else {
        upNum = num1
        upNumber.innerText = `${upNum} + `
    }
    numberDisplay.innerText = ""
}

function subtractionFuncionality() {
    if (upNumber.textContent) {
        let result = Number(upNum) - Number(numberDisplay.textContent)
        upNumber.innerText = `${Number(result).toFixed(2)} - `
        upNum = result
    } else {
        upNum = num1
        upNumber.innerText = `${upNum} - `
    }
    numberDisplay.innerText = ""
}

function divisionFuncionality() {
    if (upNumber.textContent) {
        let result = numberDisplay.textContent ? Number(upNum) / Number(numberDisplay.textContent) : Number(upNum)
        if (result === 0 || result === Infinity) {
            console.log("Oi")
            result = 0
        }
        upNumber.innerText = `${Number(result).toFixed(2)} / `
        upNum = result
    } else {
        upNum = num1
        upNumber.innerText = `${Number(upNum).toFixed(2)} / `
    }
    numberDisplay.innerText = ""
}

function multiplicationFuncinality() {
    if (upNumber.textContent) {
        let result = numberDisplay.textContent ? Number(upNum) * Number(numberDisplay.textContent) : Number(upNum)
        upNumber.innerText = `${Number(result).toFixed(2)} * `
        upNum = result
    } else {
        upNum = num1
        upNumber.innerText = `${Number(upNum).toFixed(2)} * `
    }
    numberDisplay.innerText = ""
}

function validateCalc() {
    if (upNumber.textContent.includes("/") && numberDisplay) {
        divisionFuncionality()
    } else if (upNumber.textContent.includes("+") && numberDisplay) {
        additionFuncinality()
    } else if (upNumber.textContent.includes("-") && numberDisplay) {
        subtractionFuncionality()
    } else if (upNumber.textContent.includes("*") && numberDisplay) {
        multiplicationFuncinality()
    }
}

const app = new getNum()
const main = () => {
    app.keyboardNumbers()
    app.getKey1()
    app.addition()
    app.subtraction()
    app.division()
    app.multiplication()
    app.equal()
    app.reset()
    app.del()
}

main()