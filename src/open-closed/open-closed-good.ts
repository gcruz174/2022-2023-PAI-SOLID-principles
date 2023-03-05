/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Good example of open-closed principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @desc Represents any shape
 */
interface Shape {
  area(): number;
}

/**
 * @desc A square is a shape with a side length.
 * @implements Shape
 */
class Square implements Shape {
  constructor(private length: number) {}

  area(): number {
    return this.length * this.length;
  }
}

/**
 * @desc A circle is a shape with a radius.
 * @implements Shape
 */
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  constructor(private shapes: Shape[]) {}

  public sum(): number {
    let area: number = 0;
    for (let shape of this.shapes) {
      area += shape.area();
    }

    return area;
  }
}

function main() {
  const shapes: Shape[] = [new Circle(3), new Square(5), new Square(6)];
  const areaCalculator: AreaCalculator = new AreaCalculator(shapes);

  console.log(areaCalculator.sum().toFixed(3)); // 89.274
}

if (require.main === module) {
  main();
}
