/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Good example of interface segregation principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Interface_segregation_principle}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @desc Represents any animal that can walk or run.
 */
interface WalkingAnimal {
  walk(): void;
  run(): void;
}

/**
 * @desc Represents any animal that can fly.
 */
interface FlyingAnimal {
  fly(): void;
}

/**
 * @desc A dog is an animal that can walk and run, but cannot fly.
 * @implements WalkingAnimal
 */
class Dog implements WalkingAnimal {
  walk() {
    console.log("Dog is walking.");
  }
  run() {
    console.log("Dog is running.");
  }
}

/**
 * @desc A bird is an animal that can walk, run and fly.
 * @implements WalkingAnimal & FlyingAnimal
 */
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

function main() {
  const dog: WalkingAnimal = new Dog();
  dog.walk();
  dog.run();

  const bird: WalkingAnimal & FlyingAnimal = new Bird();
  bird.walk();
  bird.run();
  bird.fly(); // Birds can fly.
}
