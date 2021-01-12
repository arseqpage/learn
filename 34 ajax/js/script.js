"use strict";

const inputRub = document.querySelector('#rub'),
  inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current2.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
    } else {
      inputUsd.value = 'Что-то пошло не так';
    }
  });

  //status
  //statusText
  // response
  // readyState



});