export default function handleMobile(param) {
  param.addEventListener("click", () => {
    document.querySelector(".nav-content").classList.toggle("nav-mobile")
  })
}