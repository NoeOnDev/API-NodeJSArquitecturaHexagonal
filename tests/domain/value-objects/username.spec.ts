// tests/domain/value-objects/username.spec.ts
import { Username } from '../../../src/domain/value-objects/Username';

describe('Username Value Object', () => {
    it('should create a username instance with valid username', () => {
        const username = new Username('john_doe');
        expect(username).toBeInstanceOf(Username);
        expect(username.toString()).toBe('john_doe');
    });

    it('should throw an error for invalid username (empty)', () => {
        expect(() => new Username('')).toThrow('Invalid username');
    });
});
