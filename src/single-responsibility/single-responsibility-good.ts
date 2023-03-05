/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Good example of single responsibility principle
 *
 * @see {@link https://wikipedia.org/wiki/Single_responsibility_principle}
 *
 */

/**
 * @desc Represents a user.
 */
class User {
  constructor(private name: string, private email: string) {}

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }
}

/**
 * @desc Manages users, allowing to add and retrieve them.
 */
class UserManager {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public addUser(name: string, email: string): void {
    const user = new User(name, email);
    this.users.push(user);
  }

  public getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.getEmail() === email);
  }
}
