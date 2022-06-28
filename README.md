# Frontend Mentor - NFT preview card component solution

Esta é uma solução para o [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de programador criando projetos realistas. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Visualize o layout ideal dependendo do tamanho da tela do dispositivo
- Veja os efeitos do hover para elementos interativos

### Screenshot

![](./screenshots/screenshotdesktop.png)

![](./screenshots/screenshotmobile.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Fiquei feliz com a realização de mais um projeto do Frontend Mentor, este site esta me ajudando muito com ideias de projetos para aprimorar minhas habilidades, e estou gostando bastante. Atualmente como estou estudando JavaScript e estou dedicando muito tempo para isso, este site foi muito importante, para continuar praticando minhas habilidades com HTML e CSS, além que ele é uma boa alternativa se você não tiver alguma ideia para criar um projeto interessante para subir para seu portfólio.

```css
/*.proud-of-this-css */
#nft-image {
  height: 300px;
  width: 320px;
  margin-top: 16px;
  background: url("images/image-equilibrium.jpg");
  background-size: cover;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#eye-icon {
  opacity: 0;
}

#nft-image:hover>#eye-icon {
  opacity: 1;
}

#nft-image:hover {
  box-shadow: 0 320px hsla(178, 100%, 50%, .5) inset;
}

/* Nunca tinha utilizado hover em uma imagem, essa foi a minha primeira vez. */
```

### Continued development

Sinto que posso melhorar bastante, mas estou feliz porque estou fazendo esses projetos sem muitas dificuldades, acredito que estou no caminho certo. Julgo que esta na hora de criar alguns projetos com JavaScript. hehe

## Author

- Linkedin - [@Adriano Escarabote](https://www.linkedin.com/in/adriano-escarabote-944b02233/)
- Frontend Mentor - [@AdrianoEscarabote](https://www.frontendmentor.io/profile/AdrianoEscarabote)
- Instagram - [@ogdrian](https://www.instagram.com/ogdrian/)