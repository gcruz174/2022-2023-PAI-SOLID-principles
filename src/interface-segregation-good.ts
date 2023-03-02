interface WalkingAnimal {
  walk(): void;
  run(): void;
}

interface FlyingAnimal {
  fly(): void;
}

class Dog implements WalkingAnimal {
  walk() {
    console.log("Dog is walking.");
  }
  run() {
    console.log("Dog is running.");
  }
}

class Bird implements WalkingAnimal, FlyingAnimal {
  walk() {
    console.log("Bird is walking.");
  }
  run() {
    console.log("Bird is running.");
  }
  fly() {
    console.log("Bird is flying.");
  }
}

let dog: WalkingAnimal = new Dog();
dog.walk();
dog.run();

let bird: WalkingAnimal & FlyingAnimal = new Bird();
bird.walk();
bird.run();
bird.fly(); //Birds can fly.
