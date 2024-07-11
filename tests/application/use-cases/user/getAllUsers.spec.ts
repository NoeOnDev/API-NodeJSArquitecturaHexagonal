// tests/application/use-cases/user/getAllUsers.spec.ts
import { GetAllUsers } from '../../../../src/application/use-cases/user/GetAllUsers';
import { UserRepository } from '../../../../src/domain/repositories/UserRepository';
import { User } from '../../../../src/domain/entities/User';
import { Username } from '../../../../src/domain/value-objects/Username';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { Email } from '../../../../src/domain/value-objects/Email';
import { Password } from '../../../../src/domain/value-objects/Password';

const mockUserRepository: UserRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('GetAllUsers Use Case', () => {
    let getAllUsers: GetAllUsers;

    beforeEach(() => {
        getAllUsers = new GetAllUsers(mockUserRepository);
    });

    it('should return all users', async () => {
        const users = [
            new User('1', new Username('user1'), new StreetName('Street 1'), new Email('user1@example.com'), new Password('Password1')),
            new User('2', new Username('user2'), new StreetName('Street 2'), new Email('user2@example.com'), new Password('Password2'))
        ];

        (mockUserRepository.findAll as jest.Mock).mockResolvedValue(users);

        const result = await getAllUsers.execute();

        expect(result).toEqual(users);
        expect(mockUserRepository.findAll).toHaveBeenCalled();
    });
});
