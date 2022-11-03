'use strict';

const randomArray = (num, n, m, str) => {
  const newArray = []
  for (let i = 0; i < num; i++) {
    let sum = (newArray.push(Math.floor(Math.random() * (m - n)) + n));
    if (str === 'even') {
      if (sum % 2 === 0 ) {
        newArray.push(sum);
      } 
  }
  if (str === 'odd') {
      if (sum % 2 !== 0) {
        newArray.push(sum);
      }
    }
  }  return newArray;
}

console.log(randomArray(12, 18, 38, 'even'));