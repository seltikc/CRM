'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];


const getAveragePriceGoods = (arr) => {
  const newArr = []; // Сюда запишется средняя стоймость товара 
  for (const i of arr) {
    const[count, sum] = i; // Создаем переменную в которой товар и сумма
    newArr.push((sum/count).toFixed()); //Добовляем сумму/на кол. товара. //Метод toFixed() форматирует число, используя запись с фиксированной запятой. 
  }
  return newArr; // Возвращаем результат
}

console.log(getAveragePriceGoods(allCashbox)) 