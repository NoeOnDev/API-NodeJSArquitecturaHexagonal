// tests/application/use-cases/street/deleteStreet.spec.ts
import { DeleteStreet } from '../../../../src/application/use-cases/street/DeleteStreet';
import { StreetRepository } from '../../../../src/domain/repositories/StreetRepository';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockStreetRepository: StreetRepository = {
    findById: jest.fn(),
    findByName: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('DeleteStreet Use Case', () => {
    let deleteStreet: DeleteStreet;

    beforeEach(() => {
        deleteStreet = new DeleteStreet(mockStreetRepository);
    });

    it('should delete a street successfully', async () => {
        (mockStreetRepository.findById as jest.Mock).mockResolvedValue({ id: '1' });

        await expect(deleteStreet.execute('1')).resolves.not.toThrow();

        expect(mockStreetRepository.deleteById).toHaveBeenCalledWith('1');
    });

    it('should throw an error if street not found', async () => {
        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(deleteStreet.execute('1')).rejects.toThrow(NotFoundError);
    });
});
