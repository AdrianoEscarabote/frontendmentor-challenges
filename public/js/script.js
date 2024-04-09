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
      ? `https://github.com/AdrianoEscarabote/frontendmentor/tree/main/${item.name}`
      : item.repo;

  const card = `
    <li class="card flex flex-col items-center">
      <picture class="image overflow-hidden relative">
        <img src=${image} alt=""/>
      </picture>
      <article class="text">            
        <h2>
          <a href="${url}">${item.title}</a>
        </h2>          
        <small>
          <a aria-label="github repository" class="flex gap-2 items-center" href="${repo}">
          Github repo
          <img src="../../public/assets/github.png" alt="" width="24"/>
          </a>
        </small>  
      </article>
    </li>
  `;

  list.insertAdjacentHTML("beforeend", card);
}
