class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(geomFig) {
    let area;
    if (geomFig instanceof Square) {
      return (area = geomFig.side * geomFig.side);
    } else if (geomFig instanceof Rectangle) {
      return (area = geomFig.width * geomFig.height);
    } else if (geomFig instanceof Circle) {
      return (area = 3.14 * (geomFig.radius * geomFig.radius));
    } else {
      return "Geometric figure not valid";
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
