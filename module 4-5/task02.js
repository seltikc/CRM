"use strict";

//Вторая задача


const lineModified = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log(lineModified('привет Мир'));