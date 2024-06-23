import { InvalidUserPasswordException } from "../exceptions/InvalidUserPasswordException";
import * as bcrypt from 'bcrypt';

export class Password {
    private readonly hashedPassword: string;

    constructor(password: string) {
        if (!this.validate(password)) {
            throw new InvalidUserPasswordException();
        }
        this.hashedPassword = this.hash(password);
    }

    get value(): string {
        return this.hashedPassword;
    }

    private validate(password: string): boolean {
        return password.length >= 8;
    }

    private hash(password: string): string {
        const saltRounds = 12;
        return bcrypt.hashSync(password, saltRounds);
    }

    static verify(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword);
    }
}