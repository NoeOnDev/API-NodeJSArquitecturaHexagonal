// tests/domain/value-objects/password.spec.ts
import { Password } from '../../../src/domain/value-objects/Password';

describe('Password Value Object', () => {
    it('should create a password instance with valid password', () => {
        const password = new Password('StrongPassword123');
        expect(password).toBeInstanceOf(Password);
        expect(password.toString()).toBe('StrongPassword123');
    });

    it('should throw an error for invalid password (too short)', () => {
        expect(() => new Password('123')).toThrow('Invalid password');
    });
});
