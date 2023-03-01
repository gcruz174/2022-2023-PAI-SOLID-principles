class User {
  private name: string;
  private email: string;
  
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  
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
