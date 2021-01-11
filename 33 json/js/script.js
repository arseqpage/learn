"use strict";

const person = {
  name: 'Alex',
  tel: '+7383839829',
  parents: {
    mom: 'Jefry',
    dad: 'Mike'
  }
};


const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);