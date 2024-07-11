// tests/domain/value-objects/email.spec.ts
import { Email } from '../../../src/domain/value-objects/Email';

describe('Email Value Object', () => {
    it('should create an email instance with valid email', () => {
        const email = new Email('test@example.com');
        expect(email).toBeInstanceOf(Email);
        expect(email.toString()).toBe('test@example.com');
    });

    it('should throw an error for invalid email format', () => {
        expect(() => new Email('invalid-email')).toThrow('Invalid email format');
    });
});
