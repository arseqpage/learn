"use strict";

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 22 + 'px';

  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);

let tops = document.documentElement.scrollTop,
  scrollElem = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  for (let i = 0; i < window.height; i++) {
    scrollElem.style.width += i + '%';
  }

});