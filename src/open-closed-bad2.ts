class Square {
    public length: number;
  
    constructor(length: number) {
      this.length = length;
    }
  
    area(): number {
      return Math.pow(this.length, 2);
    }
  }
  
  class Circle {
    public radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    area(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class AreaCalculator {
  
    constructor(private shapes: (Circle | Square)[]) {}
  
    public sum(): number {
      let area: number = 0
      for (let shape of this.shapes) {
        area += shape.area();
      }
  
      return area
    }
  }
  
  const shapes: (Circle | Square)[] = [ new Circle(3), new Square(5), new Square(6) ];
  const areaCalculator: AreaCalculator = new AreaCalculator(shapes);
  
  console.log(areaCalculator.sum().toFixed(3)); // 89.274
  