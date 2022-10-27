"use strict";


//Задача №2

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain === 0) {
  console.log('Дождя нет!'); 
}


//Задача №3

const mathematics = +prompt('Введите кол-во баллов по математике');
const russianLanguage = +prompt('Введите кол-во баллов по русскому языку');
const informatics = +prompt('Введите кол-во баллов по информатике');

const result = mathematics + russianLanguage + informatics;

if (result >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else {
  (result < 265) 
  console.log('Вы не набрали достаточное колличество балов на бюджет!');
} 


//Задача №4

const money = +prompt('Сколько денег хотите снять?');

if (money >= 100) {
  console.log(`Выдача ${money} рублей`)
} 
  else {
  console.log('минимальная сумма к выдаче 100 рублей')
}




