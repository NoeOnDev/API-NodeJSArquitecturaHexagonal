// tests/application/use-cases/user/updateUser.spec.ts
import { UpdateUser } from '../../../../src/application/use-cases/user/UpdateUser';
import { UserRepository } from '../../../../src/domain/repositories/UserRepository';
import { User } from '../../../../src/domain/entities/User';
import { Username } from '../../../../src/domain/value-objects/Username';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { Email } from '../../../../src/domain/value-objects/Email';
import { Password } from '../../../../src/domain/value-objects/Password';
import { ValidationError } from '../../../../src/application/errors/ValidationError';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockUserRepository: UserRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('UpdateUser Use Case', () => {
    let updateUser: UpdateUser;

    beforeEach(() => {
        updateUser = new UpdateUser(mockUserRepository);
    });

    it('should update user successfully', async () => {
        const user = new User('1', new Username('user1'), new StreetName('Street 1'), new Email('user1@example.com'), new Password('Password1'));

        (mockUserRepository.findById as jest.Mock).mockResolvedValue(user);

        const updatedUsername = 'new_user1';
        const updatedStreet = 'New Street 1';
        const updatedEmail = 'new_user1@example.com';
        const updatedPassword = 'NewPassword1';

        await expect(updateUser.execute('1', updatedUsername, updatedStreet, updatedEmail, updatedPassword)).resolves.not.toThrow();

        expect(user.username.toString()).toBe(updatedUsername);
        expect(user.street.toString()).toBe(updatedStreet);
        expect(user.email.toString()).toBe(updatedEmail);
        expect(user.password.toString()).toBe(updatedPassword);
        expect(mockUserRepository.update).toHaveBeenCalledWith(user);
    });

    it('should throw an error if user not found', async () => {
        (mockUserRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(updateUser.execute('1', 'new_user1', 'New Street 1', 'new_user1@example.com', 'NewPassword1')).rejects.toThrow(NotFoundError);
    });

    it('should throw an error if any field is missing', async () => {
        const user = new User('1', new Username('user1'), new StreetName('Street 1'), new Email('user1@example.com'), new Password('Password1'));

        (mockUserRepository.findById as jest.Mock).mockResolvedValue(user);

        await expect(updateUser.execute('1', '', 'New Street 1', 'new_user1@example.com', 'NewPassword1')).rejects.toThrow(ValidationError);
        await expect(updateUser.execute('1', 'new_user1', '', 'new_user1@example.com', 'NewPassword1')).rejects.toThrow(ValidationError);
        await expect(updateUser.execute('1', 'new_user1', 'New Street 1', '', 'NewPassword1')).rejects.toThrow(ValidationError);
        await expect(updateUser.execute('1', 'new_user1', 'New Street 1', 'new_user1@example.com', '')).rejects.toThrow(ValidationError);
    });
});
