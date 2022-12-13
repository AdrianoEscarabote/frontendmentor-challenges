export default class CreateElements {
  constructor(old, newLink) {
    this.old = old
    this.newLink = newLink
  }

  oldLink() {
    const p = document.createElement("p")
    p.innerText = this.old
    p.className = "oldLink"
    return p
  }

  newLink() {
    const p = document.createElement("p")
    p.className = "res"
    return p
  }
} 



/* 
<div id="showLink">
  <p class="oldLink">https://imacoolguy.com.br/home</p>
  <div class="link">
    <p class="res">https://irel.link/adkfsj</p>
    <button id="copy">Copy</button>
  </div>
</div>  */