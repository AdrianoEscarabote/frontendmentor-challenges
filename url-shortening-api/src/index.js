import handleMobile from "./js/handleMobileMenu.js";
import buttonCopy from "./js/buttonCopy.js";
import getShortApi from "./js/getShortApi.js";
import LinkObj from "./js/LinkObj.js";
import { renderItems, getParentElement, createElement, getNewLink, getOldLink} from "./js/handleLocalStorage.js";

const button = document.getElementById("menu")
button.addEventListener("click", handleMobile(button))

function generateNewLink() {
  document.getElementById("url").classList.remove("error")
  document.getElementById("error").classList.remove("errorTxt")
  document.querySelector(".shortLinks").classList.add("relative")

  const parentDivShowLink = document.createElement("div")
  parentDivShowLink.id = "showLink"

  const inputValue = document.querySelector("#url").value

  const pOld = document.createElement("p")
  pOld.className = "oldLink"
  pOld.innerText = inputValue

  const divClassLink = document.createElement("div")
  divClassLink.className = "link"

  const pnew = document.createElement("p")
  pnew.className = "res"

  loadLink(inputValue)

  const newButton = document.createElement("button")
  newButton.innerText = "Copy"
  newButton.id = "copy"
  newButton.addEventListener("click", (ev) => {
    buttonCopy(ev)
  })

  divClassLink.append(pnew, newButton)
  parentDivShowLink.append(pOld, divClassLink)

  const parentMaster = document.querySelector(".shortLinks")
  parentMaster.appendChild(parentDivShowLink)

  async function loadLink(link) {
    try {
      let linkObjectJson = await getShortApi(link)

      const newLink = new LinkObj(linkObjectJson)

      renderLink(newLink.full_short_link)
    } catch (e) {
      renderLink("Please enter a valid link!")
      pOld.innerText = "Error!"
    }
  }

  function renderLink(adviceLink) {
    pnew.innerText = adviceLink
  }

  buttonGenerate.setAttribute("disabled", "")
  buttonGenerate.classList.add("disabled")
  buttonGenerate.innerText = "Wait!"

  setTimeout(() => {
    buttonGenerate.removeAttribute("disabled")
    buttonGenerate.classList.remove("disabled")
    buttonGenerate.innerText = "Shorten it!"
  }, 2000)
}

function checkInputValue() {
  const inputValue = document.getElementById("url")
  const text = document.getElementById("error")
  if (inputValue.value === "") {
    inputValue.classList.add("error")
    text.classList.add("errorTxt")
  } else {
    generateNewLink()
    setTimeout(() => {
      getParentElement( getOldLink(), getNewLink() )
    }, 1500)
  }
}

let buttonGenerate = document.getElementById("generate")
buttonGenerate.addEventListener("click", checkInputValue)

window.addEventListener("load", () => {
  renderItems()
})