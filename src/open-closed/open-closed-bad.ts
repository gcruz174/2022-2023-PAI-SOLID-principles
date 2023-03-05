/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc First bad example of open-closed principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @desc Represents a square
 */
class Square {
  constructor(private length: number) {}

  getLength(): number {
    return this.length;
  }
}

/**
 * @desc Represents a circle
 */
class Circle {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

/**
 * @desc Calculates the area of a set of shapes
 * @todo This class is not open for extension
 * @todo This class is not closed for modification
 */
class AreaCalculator {
  constructor(private shapes: (Circle | Square)[]) {}

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

function main() {
  const shapes: (Circle | Square)[] = [
    new Circle(3),
    new Square(5),
    new Square(6),
  ];
  const areaCalculator: AreaCalculator = new AreaCalculator(shapes);

  console.log(areaCalculator.sum().toFixed(3)); // 89.274
}

if (require.main === module) {
  main();
}
