# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Contents

- [The challenge](#the-challenge)
- [Continued development](#continued-development)
- [Technologies Used](#technologies-used)
- [Used Concepts](#used-concepts)
- [Setup](#setup)
- [Author](#author)
- [License](#📝-license)
- [Show your support](#show-your-support)

### The challenge

**My app allows users to:**

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

### Continued development

This was my third project with Svelte, and I'm very pleased with the outcome. This time, I tried to learn new things, so I started playing around with the looping functionalities in HTML. For example, to render the items of the list, I used the following code:

```
{#each Ingredients as Ingredients}
  <li class="flex gap-7 items-center ml-2">
    <span class="w-1 h-1 rounded-full bg-primary-dark-raspberry"> </span>
    <span>{Ingredients}</span>
  </li>
{/each}
```

I intend to continue exploring and learning more about this technology, so there will definitely be more projects with it coming soon.

## Technologies Used

**Operational System**

![Windows](https://img.shields.io/badge/Windows-017AD7?style=for-the-badge&logo=windows&logoColor=white)

**Front-end**

[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

**Tools**

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Setup

Follow these steps to set up the project:

Clone the project repository using the following command:

```sh
git clone https://github.com/AdrianoEscarabote/frontendmentor-challenges/tree/main/recipe-page
```

Navigate to the project's root directory:

```sh
cd recipe-page/
```

Install project dependencies by running:

```sh
npm install
```

### Development

To start the development server and preview your application, use the following command:

```sh
npm run dev
```

### Testing

Run tests by executing the following command:

```sh
npm run test
```

## Author

👤 **AdrianoEscarabote**

- Github: [@AdrianoEscarabote](https://github.com/AdrianoEscarabote)
- Linkedin: [@AdrianoEscarabote](https://www.linkedin.com/in/AdrianoEscarabote/)
- Frontend Mentor: [@AdrianoEscarabote](https://www.frontendmentor.io/profile/AdrianoEscarabote)
- Twitter: [@drianEscarabote](https://twitter.com/drianEscarabote)

## 📝 License

Copyright © 2023 [AdrianoEscarabote](https://github.com/AdrianoEscarabote).<br />
This project is [MIT](https://github.com/AdrianoEscarabote/frontendmentor-challenges/blob/main/LICENSE) licensed.

---

## Show your support

Give a ⭐️ if this project helped you!
