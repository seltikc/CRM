"use strict";

//Задача №2

const nameProduct = prompt('Наименование товара:','Смеситель');
const quantity = prompt('Количество товара:', 3);
const category = prompt('Категорию товара:','Кухонные');
const price = prompt('Стоимость товара:', 7300);

console.log(`На складе ${quantity} единицы товара "${nameProduct}" на сумму ${quantity * price} деревянных`); 

