"use strict";

// To string
console.log(typeof (String(null))); // string
console.log(typeof (String(4))); // string

// 2)
console.log(typeof (null + ' ')); // string

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontsize = 26 + 'px';

// To Number 1)
console.log(typeof (Number('4'))); // number

// 2)
console.log(typeof (+'5')); // number

// 3)

console.log(typeof (parseInt('15px', 10))); // number

// let answer = +prompt('He', '');

// To boolean

// 0, ' ', null, undefined, NaN;

let switcher = null;

if (switcher) {
  console.log('Working');
}

switcher = 1;

if (switcher) {
  console.log('Working...');
}

// 2)

console.log(typeof (Boolean('4'))); // boolean

// 3)

console.log((!!'3'));