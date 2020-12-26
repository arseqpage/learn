"use strict";


const now = new Date('2020-12-22');
// new Date.parse('2020-12-22');

// console.log(now.setHours(40));
// console.log(now);



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 9 + i ** 32;
}

let end = new Date();

alert(`Цикло отработал за ${end - start} миллисекунд`);