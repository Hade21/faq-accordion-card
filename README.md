# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Desktop](./Screenshot-desktop.png)

### Links

- Solution URL: [Github repo](https://github.com/Hade21/faq-accordion-card)
- Live Site URL: [Github pages](https://hade21.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript DOM


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="text">
      <h1>FAQ</h1>
      <div class="faq">
        <p class="question">How many team members can I invite?<img src="./images/icon-arrow-down.svg" alt=""></p>
        <p class="answer">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
      </div>
      <div class="faq">
        <p class="question">What is the maximum file upload size?<img src="./images/icon-arrow-down.svg" alt=""></p>
        <p class="answer">No more than 2GB. All files in your account must fit your allotted storage space.</p>
      </div>
      <div class="faq">
        <p class="question">How do I reset my password?<img src="./images/icon-arrow-down.svg" alt=""></p>
        <p class="answer">Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
      </div>
      <div class="faq">
        <p class="question">Can I cancel my subscription?<img src="./images/icon-arrow-down.svg" alt=""></p>
        <p class="answer">Yes! Send us a message and we’ll process your request no questions asked.</p>
      </div>
      <div class="faq">
        <p class="question">Do you provide additional support?<img src="./images/icon-arrow-down.svg" alt=""></p>
        <p class="answer">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
      </div>
    </div>
```
```css
.active{
    font-weight: 700;
}
.expand{
    display: block;
}
.rotate{
    transform: rotate(180deg);
    transition: .5s;
}
```
```js
const text = document.querySelectorAll('.faq');

text.forEach(function(event) {
    event.firstElementChild.addEventListener('click', function() {
        text.forEach(function(txt) {
            txt.firstElementChild.classList.remove('active');
            txt.lastElementChild.classList.remove('expand');
            txt.firstElementChild.firstElementChild.classList.remove('rotate');
        })
        event.firstElementChild.classList.toggle('active');
        event.lastElementChild.classList.toggle('expand');
        event.firstElementChild.firstElementChild.classList.toggle('rotate');
    })
})
```


### Continued development

Maybe later i'll use this card for my another webpage and also with some customization.

### Useful resources

- [javascript DOM](https://github.com/hade21/web_dev) - This helped me for creating acccordion expand and close. I really liked this method and will use it going forward.
- [CSS animation](https://tutorial.tips/rotate-image-in-css/) - This is an amazing article which helped me finally understand rotate image in css. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Hade21](https://www.frontendmentor.io/profile/hade21)
- LinkedIn - [Muhammad Abdurrohman](https://www.linkedin.com/in/muhammad-a-589675141/)

