- Active webpage [Click here to see webpage](https://adrianoescarabote.github.io/interactive-rating-component/)

# GIF



# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I was having doubts about how to use the `addEventListener` method in a variable that contained more than one element of the same type, with this one I managed to solve the problem!

```js
btns.forEach(rate => {
    rate.addEventListener('click', () => {
        res.innerHTML = rate.value
    })
})
```

### Continued development

I want to improve my skills a lot using javascript, but with this challenge, I realized that I've already improved a lot.

## Author

- Linkedin - [AdrianoEscarabote](https://www.linkedin.com/in/adriano-escarabote-944b02233/)
- Frontend Mentor - [@AdrianoEscarabote](https://www.frontendmentor.io/profile/AdrianoEscarabote)
- Instagram - [@ogdrian](https://www.instagram.com/ogdrian/)
- Twitter - [@drianEscarabote](https://twitter.com/drianEscarabote)