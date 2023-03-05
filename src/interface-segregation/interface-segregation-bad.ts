/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Bad example of interface segregation principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Interface_segregation_principle}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @desc Represents any animal that can walk, run or fly.
 */
interface Animal {
  walk(): void;
  run(): void;
  fly(): void;
}

/**
 * @desc A dog is an animal that can walk and run, but cannot fly.
 * @implements Animal
 */
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

/**
 * @desc A bird is an animal that can walk, run and fly.
 * @implements Animal
 */
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

function main() {
  const dog: Animal = new Dog();
  dog.walk();
  dog.run();
  dog.fly(); // Dogs cannot fly.

  const bird: Animal = new Bird();
  bird.walk();
  bird.run();
  bird.fly(); // Birds can fly.
}

if (require.main === module) {
  main();
}
