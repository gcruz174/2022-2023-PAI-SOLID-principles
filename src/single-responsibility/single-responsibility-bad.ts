/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Bad example of single responsibility principle
 *
 * @see {@link https://wikipedia.org/wiki/Single_responsibility_principle}
 *
 */

class User {
  constructor(private name: string, private email: string) { }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public save(): void {
    // Save user to database
    return;
  }

  public getUserByEmail(email: string): User | undefined {
    // Get user from database
    return undefined;
  }
}
