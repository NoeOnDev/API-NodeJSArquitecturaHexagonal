import { InvalidUserEmailException } from "../exceptions/InvalidUserEmailException";

export class Email {
    constructor(private readonly email: string) {
        if (!this.validate(email)) {
            throw new InvalidUserEmailException(email);
        }
    }

    get value(): string {
        return this.email;
    }

    private validate(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}