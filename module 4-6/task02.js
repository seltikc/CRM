'use strict';

//Метод Number.isInteger() определяет, является ли переданное значение целым числом.

const isPrime = (sum) => {
  for (let i = 2; i < sum; i++) {
    if (Number.isInteger(sum / i)) {
      console.log('Не простое число');
      return false;
    }
  }console.log('Простое число')
  return true;
}

isPrime(7)