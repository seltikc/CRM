'use strict';

const guessNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  console.log('Загаданное число: ', number);
  const userNumber = '';

  const inputNumber = (userNumber) => {
    userNumber = +prompt('Введите число');
    if (number === userNumber) {
      return alert('Правильно!');
    }
    if (Number.isNaN(userNumber)) {
      alert('Введи число!');
      return inputNumber();
    }
    if (userNumber > number) {
      alert('Меньше число!');
      return inputNumber();
    }
    if (userNumber < number) {
      alert('Больше число!');
      return inputNumber();
    }
  };
  inputNumber(userNumber);
};

guessNumber();
