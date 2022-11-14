'use strict';

const rectangle = {
  actualWidth: 5,
  actualHeight: 5,
  set width(value) {
    this.actualWidth = value;
  },
  set height(value) {
    this.actualHeight = value;
  },
  get perimeter() {
    return console.log(`${(this.actualWidth + this.actualHeight) * 2} см`);
  },
  get square() {
    return console.log(`${this.actualWidth * this.actualHeight} см`);
  },
};

rectangle.square;
rectangle.width = 15;
rectangle.height = 9;
rectangle.perimeter;
