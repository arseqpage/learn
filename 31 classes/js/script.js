"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

// const square = new Rectangle(34, 10),
//   long = new Rectangle(122, 10);

// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();

console.log(div.calcArea());