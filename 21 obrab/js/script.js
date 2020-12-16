"use strict";
const btns = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//   alert('click');
// };

// btn.onclick = function () {
//   alert('Second click');
// };

// let i = 0;

const deleteElem = (e) => {
  console.log(e.target);
  console.log(e.type);
  // e.target.remove();

  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElem);
  // }
};

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);

btns.forEach(item => {
  item.addEventListener('click', deleteElem, {
    once: true
  });
});

const link = document.querySelector('a');

link.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(e.target);
});