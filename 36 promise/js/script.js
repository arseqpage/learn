"use strict";

console.log('Запрос данных');

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'TV',
//       price: 2000,
//     };

//     resolve(product); //Передаем data

//   }, 2000);
// });

// req.then((product) => {
//   // console.log('Данные получены');

//   // setTimeout(() => {
//   //   product.status = 'order';
//   //   console.log(product);
//   // }, 2000);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });


// }).then(data => {
//   data.modify = true;
//   return data;
// }).then((data) => {
//   console.log(data);
// }).catch(() => {
//   console.error('Произошла ошибка')
// }).finally(() => {
//   console.log('Finnaly');
// });


//============================

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

// test(2000).then(() => console.log('1000 ms'));
// test(2300).then(() => console.log('2300 ms'));

// Promise. all ждет выполнение всех промисов и потом начнет выполнять что то

// Promise.all([test(1000), test(2300)]).then(() => {
//   console.log('All');
// });

// Promise.race выполняет действия только тогда, когда самый первый промис отработал правильно

Promise.race([test(1000), test(2300)]).then(() => {
  console.log('All');
});