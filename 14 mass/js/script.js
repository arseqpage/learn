"use strict";

const arr = [14, 22, 13, 65, 28];
arr.sort(compareNum);
// // arr[99] = 0;
// console.log(arr.length);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});


// arr.pop();
// arr.push(89);
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

const str = prompt("", "");
const products = str.split(', ');
products.sort();

console.log(products.join('; '));