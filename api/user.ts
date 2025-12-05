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

// TODO: Implement user login validation here
export function validateUser(email: string): boolean {
    return email.includes("@");
}