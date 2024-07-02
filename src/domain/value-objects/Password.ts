// src/domain/value-objects/Password.ts
export class Password {
    private readonly password: string;

    constructor(password: string) {
        if (!this.validate(password)) {
            throw new Error('Invalid password');
        }
        this.password = password;
    }

    private validate(password: string): boolean {
        return password.length >= 6;
    }

    toString(): string {
        return this.password;
    }
}
