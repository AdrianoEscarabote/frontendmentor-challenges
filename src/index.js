import handleMobile from "./js/handleMobileMenu.js";
// import "./css/style.css"
// import "./css/reset.css"
import CreateElements from "./js/showNewLink.js";
import buttonCopy from "./js/buttonCopy.js";
import { getApi } from "./js/shrtcodeApi.js";


const button = document.getElementById("menu")

button.addEventListener("click", handleMobile(button))

function teste() {
  const parentDivShowLink = document.createElement("div")
  parentDivShowLink.id = "showLink"

  const pOld = document.createElement("p")
  pOld.className = "oldLink"
  pOld.innerText = document.querySelector("#url").value

  const divClassLink = document.createElement("div")
  divClassLink.className = "link"

  const pnew = document.createElement("p")
  pnew.className = "res"
  const inputValue = document.getElementById("url").value
  pnew.innerText = getApi(inputValue)

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
}

let buttonGenerateEmail = document.getElementById("generate")

buttonGenerateEmail.addEventListener("click", teste)


{/* <div id="showLink">
  <p class="oldLink">https://imacoolguy.com.br/home</p>
  <div class="link">
    <p class="res">https://irel.link/adkfsj</p>
    <button id="copy">Copy</button>
  </div>
</div>   */}