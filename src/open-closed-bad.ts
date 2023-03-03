class Square {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  getLength(): number {
    return this.length;
  }
}

class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

class AreaCalculator {

  constructor(private shapes: (Circle | Square)[]) { }

  public sum(): number {
    let area: number = 0;
    
    for (let shape of this.shapes) {
      if (shape instanceof Square) {
        area += Math.pow(shape.getLength(), 2);
      } else if (shape instanceof Circle) {
        area += Math.PI * Math.pow(shape.getRadius(), 2);
      }
    }
    return area;
  }
}

const shapes: (Circle | Square)[] = [new Circle(3), new Square(5), new Square(6)];
const areaCalculator: AreaCalculator = new AreaCalculator(shapes);

console.log(areaCalculator.sum().toFixed(3)); // 89.274
