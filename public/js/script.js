import { challenges } from "./data.js";

loadData();

function loadData() {
  challenges.forEach((item) => createCard(item));
}

function createCard(item) {
  const list = document.getElementById("list");
  const url = item.internalhost ? `./${item.name}` : item.url;
  const image = `${item.image}`;
  const repo =
    item.internalhost === true
      ? `https://github.com/AdrianoEscarabote/frontendmentor-challenges/tree/main/${item.name}`
      : item.repo;

  const card = `
    <li class="card relative w-full h-full overflow-hidden flex flex-col items-center">
      <picture class="image w-full overflow-hidden relative">
        <img class="w-full h-full" src=${image} alt=""/>
      </picture>
      <article class="text">            
        <h2>
          <a target="_blank" aria-label="
          project deployment" href="${url}">${item.title}</a>
        </h2>          
        <small>
          <a target="_blank" aria-label="github repository" class="flex gap-2 items-center" href="${repo}">
          Github repo
          <img src="../../public/assets/github.png" alt="" width="24"/>
          </a>
        </small>  
      </article>
    </li>
  `;

  list.insertAdjacentHTML("beforeend", card);
}
