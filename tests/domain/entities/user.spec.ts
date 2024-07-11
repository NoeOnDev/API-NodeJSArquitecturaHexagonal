// tests/domain/entities/user.spec.ts
import { User } from '../../../src/domain/entities/User';
import { Username } from '../../../src/domain/value-objects/Username';
import { StreetName } from '../../../src/domain/value-objects/StreetName';
import { Email } from '../../../src/domain/value-objects/Email';
import { Password } from '../../../src/domain/value-objects/Password';

describe('User Entity', () => {
    it('should create a user instance correctly', () => {
        const user = new User(
            '1',
            new Username('john_doe'),
            new StreetName('Main Street'),
            new Email('john@example.com'),
            new Password('StrongPassword123'),
            'http://example.com/image.jpg'
        );

        expect(user).toBeInstanceOf(User);
        expect(user.id).toBe('1');
        expect(user.username.toString()).toBe('john_doe');
        expect(user.street.toString()).toBe('Main Street');
        expect(user.email.toString()).toBe('john@example.com');
        expect(user.password.toString()).toBe('StrongPassword123');
        expect(user.imageUrl).toBe('http://example.com/image.jpg');
    });

    it('should serialize user to JSON correctly', () => {
        const user = new User(
            '1',
            new Username('john_doe'),
            new StreetName('Main Street'),
            new Email('john@example.com'),
            new Password('StrongPassword123'),
            'http://example.com/image.jpg'
        );

        const userJSON = user.toJSON();

        expect(userJSON).toEqual({
            id: '1',
            username: 'john_doe',
            street: 'Main Street',
            email: 'john@example.com',
            password: 'StrongPassword123',
            imageUrl: 'http://example.com/image.jpg'
        });
    });
});
