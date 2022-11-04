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
        } if (Number.isNaN(userNumber)) {
            alert('Введи число');
        } if (userNumber > gameNumber) {
            alert('Меньше!');
        } if (userNumber < gameNumber) {
            alert('Больше!');
        } if (userNumber === gameNumber){
            alert('Правильно');
        }
    }
}


guessTheNumber();