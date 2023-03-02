interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area(): number {
    return this.width * this.height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }
}

class Square implements Shape {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  public area(): number {
    return this.sideLength * this.sideLength;
  }

  public getSideLength(): number {
    return this.sideLength;
  }

  public setSideLength(sideLength: number): void {
    this.sideLength = sideLength;
  }
}
