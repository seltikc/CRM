'use strict';

const randomArray = (num, n, m) => {
  const newArray = []
  for (let i = 0; i < num; i++) {
    newArray.push(Math.floor(Math.random() * (m - n)) + n)
  }
  return newArray;
}

console.log(randomArray(5, 30, 70));

