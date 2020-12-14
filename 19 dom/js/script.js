'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item => {
//   console.log(item);
// });

// const oneHeart = document.querySelector('div');
// console.log(oneHeart);

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  wrapper = document.querySelector('.wrapper'),
  circles = document.getElementsByClassName('circle'),
  hearts = wrapper.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart');


// box.style.backgroundColor = 'green';
// box.style.width = '347px';
const num = 333;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'purple';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'pink'
});

const div = document.createElement('div');
// const text = document.createTextNode('Tyt bil ya');

div.classList.add('black');

wrapper.append(div); //NEW
// wrapper.appendChild(div); OLD

// wrapper.prepend(div);

// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[0]);

// hearts[0].after(div);

// circles[0].remove(); NEW
// wrapper.removeChild(hearts[1]); OLD

hearts[0].replaceWith(circles[0]); //NEW
// wrapper.replaceChild(circles[0], hearts[0]); OLD

div.innerHTML = `<h1>Hi World</h1>`;

// div.textContent = `<h1>Hi World</h1>`;

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');