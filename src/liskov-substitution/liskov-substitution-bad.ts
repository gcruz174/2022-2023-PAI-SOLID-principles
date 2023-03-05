/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Bad example of Liskov substitution principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Liskov_substitution_principle}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @desc Represents any shape that can have its area calculated.
 */
interface Shape {
  area(): number;
}

/**
 * @desc A rectangle is a shape with a width and a height.
 * @implements Shape
 */
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  public area(): number {
    return this.width * this.height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }
}

/**
 * @desc A square is a shape with a side length.
 * @implements Rectangle
 */
class Square extends Rectangle {
  constructor(private sideLength: number) {
    super(sideLength, sideLength);
  }

  public getSideLength(): number {
    return this.sideLength;
  }

  /**
   * @desc This method is not needed, but it is here to show that it is not
   * possible to set the width and height of a square independently.
   */
  public setSideLength(sideLength: number): void {
    this.sideLength = sideLength;
  }
}
