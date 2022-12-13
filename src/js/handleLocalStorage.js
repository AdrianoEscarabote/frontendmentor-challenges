export function renderItems(item) {
  document.querySelector(".shortLinks").append(item)
}

export function getParentElement(elements) {
  const parentLink = elements
  let links = []

  links.push(JSON.stringify(parentLink))
  console.log(links)
  localStorage.setItem("links", links)
}