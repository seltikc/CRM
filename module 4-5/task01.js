"use strict";

//Первая задача

const converter = (rub) => {
    const dollar = 73;
    const euro = 1.2 * dollar;
    return rub * euro;
}

const result = converter;

console.log(converter(10), 'руб.');


