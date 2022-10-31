'use strict';

//Свойство length возвращает количество элементов в массиве. Если элементов нет, то свойство возвращает 0.

const reversive = (str) => {
  let newStr = '';  

    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
  console.log(reversive('Привет мир!'));
  