const res = await fetch("data.json");
const data = await res.json()

export default function () {
  for (let i = 0; i < data.length; i++) {

    const notification = document.createElement("div")
    notification.setAttribute("class", "notification")

    const imageAvatar = document.createElement("img")
    imageAvatar.setAttribute("src", data[i].avatar)
    imageAvatar.setAttribute("alt", "avatar")
    const content = document.createElement("div")
    content.setAttribute("class", "content")

    const title = document.createElement("div")
    title.setAttribute("class", "title")

    const h2 = document.createElement("h2")
    const strong1 = document.createElement("a")
    strong1.setAttribute("class", "spanName")

    strong1.innerText = data[i].name
    h2.appendChild(strong1)
    h2.innerHTML += data[i].info

    const strong2 = document.createElement("a")
    strong2.setAttribute("class", "spanInfo")

    const ball = document.createElement("div")
    ball.setAttribute("class", "ball")

    if (data[i].nameInfo) {
      strong2.innerText = data[i].nameInfo
      h2.appendChild(strong2)
    }
    if (data[i].picture) {
      const image = document.createElement("img")
      image.setAttribute("src", data[i].picture)
      image.setAttribute("alt", "")
      image.setAttribute("aria-hidden", true)
      image.setAttribute("class", "picImage")
      notification.append(image)
      notification.classList.add("picture")
    }
    if (data[i].message) {
      notification.classList.add("message")
      const boxMessage = document.createElement("div")
      boxMessage.setAttribute("class", "boxMessage")
      const message = document.createElement("p")
      message.innerText = data[i].message
      const notificationContent = document.createElement("div")
      notificationContent.setAttribute("class", "notificationContent")
      title.append(h2)
      boxMessage.append(message)
      const pCreatedAt = document.createElement("p")
      pCreatedAt.setAttribute("class", "time")
      pCreatedAt.innerText = data[i].createdAt
      const textContent = document.createElement("div")
      textContent.setAttribute("class", "textContent")
      textContent.append(title, pCreatedAt)
      content.append(imageAvatar, textContent)
      notification.append(content, boxMessage)
      document.querySelector("main").append(notification)
    } else {
      if (data[i].type === "new") {
        notification.classList.add("new")
      }
      title.append(h2)
      let pCreatedAt = document.createElement("p")
      pCreatedAt.setAttribute("class", "time")
      pCreatedAt.innerText = data[i].createdAt

      content.append(title, pCreatedAt)
      notification.append(imageAvatar, content)
      document.querySelector("main").append(notification)
    }

    let number = 0
    for (let j = 0; j < data.length; j++) {
      if (data[j].type) {
        number++
      }
    }
    document.querySelectorAll(".spanName").forEach(element => {
      element.setAttribute("aria-label", "See profile")
      element.setAttribute("href", "/")
    })
    document.querySelectorAll(".spanInfo").forEach(element => {
      element.setAttribute("aria-label", "More info")
      element.setAttribute("href", "/")
    })
    document.querySelector(".number").innerText = number
  }
}