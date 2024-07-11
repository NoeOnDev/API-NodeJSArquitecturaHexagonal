// tests/application/use-cases/user/deleteUser.spec.ts
import { DeleteUser } from '../../../../src/application/use-cases/user/DeleteUser';
import { UserRepository } from '../../../../src/domain/repositories/UserRepository';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockUserRepository: UserRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('DeleteUser Use Case', () => {
    let deleteUser: DeleteUser;

    beforeEach(() => {
        deleteUser = new DeleteUser(mockUserRepository);
    });

    it('should delete a user successfully', async () => {
        (mockUserRepository.findById as jest.Mock).mockResolvedValue({ id: '1' });

        await expect(deleteUser.execute('1')).resolves.not.toThrow();

        expect(mockUserRepository.deleteById).toHaveBeenCalledWith('1');
    });

    it('should throw an error if user not found', async () => {
        (mockUserRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(deleteUser.execute('1')).rejects.toThrow(NotFoundError);
    });
});
