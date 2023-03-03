interface IUserData {
  name: string;
  email: string;
}
  
class User {
  private userData: IUserData;
  
  constructor(userData: IUserData) {
    this.userData = userData;
  }
  
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
  
  public addUser(userData: IUserData): void {
    const user = new User(userData);
    this.users.push(user);
  }
  
  public getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.getEmail() === email);
  }
}
  