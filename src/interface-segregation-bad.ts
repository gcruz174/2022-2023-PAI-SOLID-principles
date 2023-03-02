interface Animal {
    walk(): void;
    run(): void;
    fly(): void;
  }
  
  class Dog implements Animal {
    walk() {
      console.log("Dog is walking.");
    }
    run() {
      console.log("Dog is running.");
    }
    fly() {
      throw new Error("Dog cannot fly.");
    }
  }
  
  class Bird implements Animal {
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

  let dog: Animal = new Dog();
  dog.walk();
  dog.run();
  //dog.fly Dog cannot fly.

  let bird: Animal = new Bird();
  bird.walk();
  bird.run();
  bird.fly(); //Birds can fly.
  