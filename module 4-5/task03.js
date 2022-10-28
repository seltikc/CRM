"use strict";

//Третья задача


const calculate = (sum, count, promo) => {

    if (count > 10) {
        sum *=0.03;
    };
    if (sum > 30000) {
        sum -= (sum - 30000) * 0.15;
    }
    if (promo === 'METHED') {
        sum *=0.10;
    }
    if ((promo === 'G3H2Z1') && (sum > 2000)) {
        sum -= 500;
    }

    return sum
}

console.log(calculate(34000));
console.log(calculate(25000, 9));
console.log(calculate(25000, 15));
console.log(calculate(25000, 9,'METHED'));
console.log(calculate(25000, 9,'G3H2Z1'));
