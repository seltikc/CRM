'use strict';

const years = (s, e) => {
  let addYears = []
  for (let y = s; y <= e; y++) {
      if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
      addYears.push(y);
      }
  }
  return addYears;
};


console.log(years(1984, 2020));