// tests/application/use-cases/user/getUserById.spec.ts
import { GetUserById } from '../../../../src/application/use-cases/user/GetUserById';
import { UserRepository } from '../../../../src/domain/repositories/UserRepository';
import { User } from '../../../../src/domain/entities/User';
import { Username } from '../../../../src/domain/value-objects/Username';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { Email } from '../../../../src/domain/value-objects/Email';
import { Password } from '../../../../src/domain/value-objects/Password';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockUserRepository: UserRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('GetUserById Use Case', () => {
    let getUserById: GetUserById;

    beforeEach(() => {
        getUserById = new GetUserById(mockUserRepository);
    });

    it('should return user by id', async () => {
        const user = new User('1', new Username('user1'), new StreetName('Street 1'), new Email('user1@example.com'), new Password('Password1'));

        (mockUserRepository.findById as jest.Mock).mockResolvedValue(user);

        const result = await getUserById.execute('1');

        expect(result).toEqual(user);
        expect(mockUserRepository.findById).toHaveBeenCalledWith('1');
    });

    it('should throw an error if user not found', async () => {
        (mockUserRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(getUserById.execute('1')).rejects.toThrow(NotFoundError);
    });
});
