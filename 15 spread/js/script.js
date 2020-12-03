"use strict";

let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj; // Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 1
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// Object asign

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);

clone.d = 134;
// console.log(add, clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Geee';
console.log(newArray);
console.log(oldArray);

const video = ['Youtube', ' Vimeo', 'Rutube'],
  blogs = ['Wordpress', 'Livejornal', 'Blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 6];

log(...num);

const array = ['g', 'f', 'z'];

const newArrayTwo = [...array];

const q = {
  one: 1,
  two: 2,
  thirtyThree: 33
};

const someObj = {...q};