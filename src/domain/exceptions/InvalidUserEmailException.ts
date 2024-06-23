export class InvalidUserEmailException extends Error {
    constructor(email: string) {
        super(`The email ${email} is invalid.`);
        this.name = 'InvalidUserEmailException';
    }
}