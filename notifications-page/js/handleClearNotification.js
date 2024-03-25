export default function () {
  const classNot = document.querySelectorAll(".notification")
  classNot.forEach(div => {
    if (div.classList.contains("new")) {
      div.classList.remove("new")
    }
  })
  document.querySelector(".number").innerText = 0
}