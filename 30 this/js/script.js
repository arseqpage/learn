"use strict";


// 1) Обычная функция: this =  window, если стоит use strict - undtfined

// function showThis(a, b) {
//   console.log(this);
// };

// showThis();


// function showThis(a, b) {
//   console.log(this);

//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// };

// showThis(4, 5);

// =================================


// 2) Контенкcт у методов объекта - сам объект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };

// obj.sum();

//=========================================

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// const ivan = new User('Ivan', 22);

// =================================

// 4) Ручная привязка this: call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// };

// const user = {
//   name: 'John',
// };

// sayName.call(user, ' Smith'); // Передаем в кавычках через запятую
// sayName.apply(user, [' Smith']); // Передаем в массиве

// function count(num) {
//   return this * num;
// }

// const double = count.bind(4);
// console.log(double(3));
// console.log(double(43));

// ===================================================================

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  styleBtn(e);

});

function styleBtn(e) {
  e.target.style.backgroundColor = 'red';
  e.target.style.border = 'none';
  e.target.style.outline = 'none';
  e.target.style.padding = '1rem 2rem';
  e.target.style.color = 'white';
  console.log(e);
};
// function styleBtn() {
//   this.style.backgroundColor = 'red';
//   this.style.border = 'none';
//   this.style.outline = 'none';
//   this.style.padding = '1rem 2rem';
//   this.style.color = 'white';
//   console.log(this);
// };

const obj2 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};

obj2.sayNumber();

const double = (a, b) => a * 2 + b;
console.log(double(5, 3));