// src/domain/value-objects/Email.ts
export class Email {
    private readonly email: string;

    constructor(email: string) {
        if (!this.validate(email)) {
            throw new Error('Invalid email format');
        }
        this.email = email;
    }

    private validate(email: string): boolean {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    toString(): string {
        return this.email;
    }
}
