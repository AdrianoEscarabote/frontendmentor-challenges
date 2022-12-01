import "./css/style.css"
import "./css/reset.css"
import "core-js"
import "regenerator-runtime/runtime"
import AdviceObj from "./js/advice_object"
import { getAdvice } from "./js/avice_service"

async function loadAdvice() {
  let adviceObjectsJson = await getAdvice()

  const newAdvice = new AdviceObj(adviceObjectsJson.id, adviceObjectsJson.advice)

  renderAdvice(newAdvice)
}

function renderAdvice(adviceObjects) {
  const id = document.getElementById("adviceId")
  id.innerText = adviceObjects.id

  const adviceContent = document.getElementById("advice")
  adviceContent.innerText = adviceObjects.content
}

window.addEventListener("load", () => {
  const button = document.getElementById("changeAdvice")

  button.addEventListener("click", () => {
    
    document.querySelector("main").classList.toggle("animate")
    
    setTimeout(() => {
      loadAdvice()  
    }, 960)
  })
  loadAdvice()
})