export class InvalidUserPasswordException extends Error {
    constructor() {
        super(`Invalid password. Password must be at least 8 characters long.`);
        this.name = 'InvalidUserPasswordException';
    }
}