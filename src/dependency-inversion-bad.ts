class UserService {
  private storage: DatabaseStorage;

  constructor() {
    this.storage = new DatabaseStorage();
  }

  saveUser(user: string): void {
    this.storage.save(user);
    return;
  }

  getUser(userId: string): string {
    return this.storage.get(userId);
  }
}

class DatabaseStorage {
  save(data: any): void {
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
