import buttonCopy from "./buttonCopy.js";

export function renderItems() {
  const append = document.querySelector(".shortLinks")
  if (localStorage.hasOwnProperty("linksLocal")) {
    document.querySelector(".shortLinks").classList.add("relative")
    JSON.parse(localStorage.getItem("linksLocal")).forEach(element => {
      append.append(createElement(element.old, element.newLink))
    });
  }
}

export function createElement(old, newLink) {
  const parentDiv = document.createElement("div")
  parentDiv.id = "showLink"

  const pOld = document.createElement("p")
  pOld.innerText = old
  pOld.className = "oldLink"

  const divParentNewLink = document.createElement("div")
  divParentNewLink.className = "link"

  const pNew = document.createElement("p")
  pNew.innerText = newLink
  pNew.className = "res"

  const buttonClipboard = document.createElement("button")
  buttonClipboard.id = "copy"
  buttonClipboard.innerText = "Copy"
  buttonClipboard.addEventListener("click", (ev) => {
    buttonCopy(ev)
  })

  divParentNewLink.append(pNew, buttonClipboard)
  parentDiv.append(pOld, divParentNewLink)

  return parentDiv
}

export async function getParentElement(linkOld, newLink) {
  let links = []

  // if it already exists
  if (localStorage.hasOwnProperty("linksLocal")) {
    links = JSON.parse(localStorage.getItem("linksLocal"))
  }

  links.push({ old: linkOld?.innerText, newLink: newLink?.innerText })

  localStorage.setItem("linksLocal", JSON.stringify(links))
}

export function getOldLink() {
  const oldLink = document.querySelectorAll(".oldLink")

  const oldArr = [...oldLink]

  const lastElement = oldArr[oldArr.length - 1]

  console.log(lastElement)

  return lastElement
}

export function getNewLink() {
  const newLink = document.querySelectorAll(".res")

  const newLinkArr = [...newLink]

  const lastElement = newLinkArr[newLinkArr.length - 1]

  console.log(lastElement)

  return lastElement
}