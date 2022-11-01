'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let sum = 0;
    for (const i of arr) {
    sum += i;
  }
    return Math.floor(sum / arr.length); // делим получившуюся сумму всего массива (32700 /8 ) Math.floor - Округляем в меньшую сторону.
}

console.log(getAverageValue(allCashbox)); // Итог: 4087

