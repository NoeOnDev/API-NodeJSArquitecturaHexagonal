// tests/application/use-cases/user/createUser.spec.ts
import { CreateUser } from '../../../../src/application/use-cases/user/CreateUser';
import { UserRepository } from '../../../../src/domain/repositories/UserRepository';
import { User } from '../../../../src/domain/entities/User';
import { Username } from '../../../../src/domain/value-objects/Username';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { Email } from '../../../../src/domain/value-objects/Email';
import { Password } from '../../../../src/domain/value-objects/Password';
import { ValidationError } from '../../../../src/application/errors/ValidationError';

const mockUserRepository: UserRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('CreateUser Use Case', () => {
    let createUser: CreateUser;

    beforeEach(() => {
        createUser = new CreateUser(mockUserRepository);
    });

    it('should create a new user successfully', async () => {
        (mockUserRepository.findByEmail as jest.Mock).mockResolvedValue(null);

        const username = 'john_doe';
        const street = 'Main Street';
        const email = 'john@example.com';
        const password = 'StrongPassword123';

        await expect(createUser.execute(username, street, email, password)).resolves.not.toThrow();

        expect(mockUserRepository.save).toHaveBeenCalledWith(expect.any(User));
    });

    it('should throw an error if email already exists', async () => {
        (mockUserRepository.findByEmail as jest.Mock).mockResolvedValue(new User(
            '1',
            new Username('existing_user'),
            new StreetName('Existing Street'),
            new Email('existing@example.com'),
            new Password('ExistingPassword123')
        ));

        const username = 'john_doe';
        const street = 'Main Street';
        const email = 'existing@example.com';
        const password = 'StrongPassword123';

        await expect(createUser.execute(username, street, email, password)).rejects.toThrow(ValidationError);
    });

    it('should throw an error if any field is missing', async () => {
        await expect(createUser.execute('', 'Main Street', 'john@example.com', 'StrongPassword123')).rejects.toThrow(ValidationError);
        await expect(createUser.execute('john_doe', '', 'john@example.com', 'StrongPassword123')).rejects.toThrow(ValidationError);
        await expect(createUser.execute('john_doe', 'Main Street', '', 'StrongPassword123')).rejects.toThrow(ValidationError);
        await expect(createUser.execute('john_doe', 'Main Street', 'john@example.com', '')).rejects.toThrow(ValidationError);
    });
});
