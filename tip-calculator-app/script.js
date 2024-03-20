// variables

const iptNumber = document.getElementById("numberBill")
const people = document.getElementById("numberPeople")
const tipBtn = document.querySelectorAll(".tipBtn")
const amount = document.getElementById("amount")
const total = document.getElementById("total")
const reset = document.getElementById("reset")
const custom = document.getElementById("custom")

// ipt value
iptNumber.addEventListener("change", () => {
    if (iptNumber.value === "0") {
        document.querySelector("h1").style.color = "red"
        alert("enter a valid number!")
    } else {
        document.querySelector("h1").style.color = "#7f9c9f"
        getTipValue(currentTip)
    }
})

//  tip value

let currentTip

tipBtn.forEach((element) => {
    element.addEventListener("click", () => {
        currentTip = element.value
        getTipValue(element.value)
    })
})

// custom tip

custom.addEventListener("change", () => {
    getTipValue(custom.value)
})

// people value

people.addEventListener("change", () => {
    getTipValue(currentTip)
})

// functions 

function getTipValue(tip) {
    if (tip === undefined) {
        document.querySelector("h2").style.color = "red"
    } else {
        document.querySelector("h2").style.color = "#7f9c9f"
    }

    if (people.value === "" || people.value === "0") {
        document.querySelector("h3").style.color = "red"
        document.getElementById("error").style.display = "block"
        people.style.border = "1px solid red"
        people.style.outline = "none"
    } else {
        document.querySelector("h3").style.color = "#7f9c9f"
        document.getElementById("error").style.display = "none"
        people.style.border = "none"
        people.style.outline = "1px solid hsl(172, 67%, 45%)"
    }

    if (people.value !== "0" && people.value !== "" && tip !== undefined) {
        calcTotal(iptNumber.value, tip, people.value)
        calcAmount(iptNumber.value, tip, people.value)
    }
}

function calcTotal(iptValue, tip, people) {
    let tipNumber = Number(tip)
    let input = Number(iptValue)
    let peopleNumber = Number(people)
    let value = ((input * tipNumber) + input) / peopleNumber
    let valueAfterRounding = value.toFixed(2)
    total.innerText = `${valueAfterRounding}$`
}

function calcAmount(iptValue, tip, people) {
    let value = (iptValue * tip) / people
    let valueAfterRounding = value.toFixed(2)
    amount.innerText = `${valueAfterRounding}$`
}

// reset button
reset.addEventListener("click", clear)

function clear() {
    amount.innerText = "0.00$"
    total.innerText = "0.00$"
    iptNumber.value = ""
    people.value = ""
    custom.value = ""
}

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow")
});
