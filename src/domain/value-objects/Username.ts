// src/domain/value-objects/Username.ts
export class Username {
    private readonly username: string;

    constructor(username: string) {
        if (!this.validate(username)) {
            throw new Error('Invalid username');
        }
        this.username = username;
    }

    private validate(username: string): boolean {
        return username.length > 0;
    }

    toString(): string {
        return this.username;
    }
}
