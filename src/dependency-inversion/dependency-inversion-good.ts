/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ginés Cruz Chávez
 * @author G. Jonay Vera Estévez
 * @since Mar 06, 2023
 * @desc Good example of dependency inversion principle
 *
 * @see {@link https://en.wikipedia.org/wiki/Dependency_inversion_principle}
 *
 */

/**
 * @desc Describes any class that can be used to store and retrieve data
 */
interface Storage {
  save(data: any): void;
  get(id: string): string;
}

/**
 * @desc Manages users, using a storage class to save and retrieve data
 */
class UserService {
  constructor(private storage: Storage) {}

  saveUser(user: string): void {
    this.storage.save(user);
    return;
  }

  getUser(userId: string): string {
    return this.storage.get(userId);
  }
}

/**
 * @desc Stores data in a database
 */
class DatabaseStorage implements Storage {
  save(data: string): void {
    console.log("Saving to database", data);
    // Save data to a database
    return;
  }

  get(id: string): string {
    console.log("Retrieving from database", id);
    // Retrieve data from a database
    return "User data";
  }
}
