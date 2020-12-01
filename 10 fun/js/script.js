"use strict";

let num = 20;

function shoFirstMessage(text) {
  console.log(text);
   
   console.log(num);
} 

shoFirstMessage('Hello');
console.log(num);

console.log(calc(4,5));
console.log(calc(4,11));
console.log(calc(4,12));

function calc(a, b) {
  return a + b;
  
}



function ret() {
  let num = 44;
  return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function() {
  console.log('Wow!');
};

logger();

const calcs = (a,b) =>  {
  console.log('1');
  return a + b;
};