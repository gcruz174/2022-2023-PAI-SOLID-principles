interface Storage {
  save(data: any): void;
  get(id: string): string;
}

class UserService {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  saveUser(user: any) {
    this.storage.save(user);
  }

  getUser(userId: string) {
    return this.storage.get(userId);
  }
}

class DatabaseStorage implements Storage {
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
