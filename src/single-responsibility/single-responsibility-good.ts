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

interface UserData {
  name: string;
  email: string;
}

class User {
  constructor(private userData: UserData) { }

  public getName(): string {
    return this.userData.name;
  }

  public getEmail(): string {
    return this.userData.email;
  }
}

class UserManager {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public addUser(userData: UserData): void {
    const user = new User(userData);
    this.users.push(user);
  }

  public getUserByEmail(email: string): User|undefined {
    return this.users.find(user => user.getEmail() === email);
  }
}
