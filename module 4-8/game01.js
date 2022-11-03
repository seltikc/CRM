'use strict';

const guessTheNumber = () => {
    const gameNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число: ", gameNumber);
    let userNumber = ' ';

    while (gameNumber !== userNumber) {
        userNumber = +prompt('Введите число');
        if (userNumber === 0) {
            alert('Игра окончена');
            return;
        } else if (Number.isNaN(userNumber)) {
            alert('Введи число');
        } else if (userNumber > gameNumber) {
            alert('Меньше!');
        } else if (userNumber < gameNumber) {
            alert('Больше!');
        } else if (userNumber === gameNumber) {
            alert('Правильно');
        }
    }
}

guessTheNumber();