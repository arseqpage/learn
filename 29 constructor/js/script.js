"use strict";

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }


// User.prototype.exit = function (name) {
//   console.log(`Пользователь ${this.name} вышел из чата`);
// };

// const ivan = new User('Ivan', 22);
// const alex = new User('Alex', 29);

// ivan.exit();


// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// const firstElem = prompt('Введите первое число:', 0),
//   secondElem = prompt('Введите второе число:', 0);

function Calculator() {

  this.read = function () {
    this.first = +prompt('Введите первое число:', 0);
    this.second = +prompt('Введите второе число:', 0);
  };

  this.sum = function () {
    return this.first + this.second;
  };

  this.mul = function () {
    return this.first * this.second;
  };

}

let calculator = new Calculator();
calculator.read();

alert('Sum:' + calculator.sum());
alert('Mul:' + calculator.mul());