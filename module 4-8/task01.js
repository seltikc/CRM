'use strict';

const randomArray = (num) => {
    const newArray = []
    for (let i = 0; i < num; i++) {
      newArray.push(Math.trunc(Math.random() * 100 + 1));
    }
    return newArray;
}

console.log(randomArray(5));






