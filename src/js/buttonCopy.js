export default function buttonCopy(ev) {
  const contentToCopy = ev.currentTarget.parentNode.children[0].innerText
  const buttons = document.querySelectorAll("#copy")

  buttons.forEach(element => {
    element.classList.remove("copied")
  })
  ev.currentTarget.classList.add("copied")

  if (ev.currentTarget.innerText === "Copy") {
    ev.currentTarget.innerText = "copied!"
    navigator.clipboard.writeText(contentToCopy)
  } else {
    ev.currentTarget.innerText = "Copy"
  }
}