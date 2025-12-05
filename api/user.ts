export class User {
  constructor(
    private userId: string,
    private name: string,
    private email: string
  ) {}

  displayInfo(): void {
    console.log(`User: ${this.name} (${this.email})`);
  }

  getUserId(): string { return this.userId; }
  getName(): string { return this.name; }
}