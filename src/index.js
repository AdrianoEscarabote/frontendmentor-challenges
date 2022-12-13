import handleMobile from "./js/handleMobileMenu.js";
// import "./css/style.css"
// import "./css/reset.css"
import buttonCopy from "./js/buttonCopy.js";
import getShortApi from "./js/getShortApi.js";
import LinkObj from "./js/LinkObj.js";


const button = document.getElementById("menu")
button.addEventListener("click", handleMobile(button))


function generateNewLink() {
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

  async function loadLink(link) {
    let linkObjectJson = await getShortApi(link)
  
    const newLink = new LinkObj(linkObjectJson)
  
    renderLink(newLink.full_short_link)
  }
  
  function renderLink(adviceLink) {
    pnew.innerText = adviceLink
    console.log(adviceLink)
  }

  const parentMaster = document.querySelector(".shortLinks")
  parentMaster.appendChild(parentDivShowLink)
  
  buttonGenerate.setAttribute("disabled", "")
  buttonGenerate.classList.add("disabled")
  buttonGenerate.innerText = "Wait!"

  setTimeout(() => {
    buttonGenerate.removeAttribute("disabled")
    buttonGenerate.classList.remove("disabled")
    buttonGenerate.innerText = "Shorten it!"
  }, 2000)
}


let buttonGenerate = document.getElementById("generate")
buttonGenerate.addEventListener("click", generateNewLink)