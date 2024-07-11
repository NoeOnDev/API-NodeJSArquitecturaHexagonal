// tests/application/use-cases/street/getStreetById.spec.ts
import { GetStreetById } from '../../../../src/application/use-cases/street/GetStreetById';
import { StreetRepository } from '../../../../src/domain/repositories/StreetRepository';
import { Street } from '../../../../src/domain/entities/Street';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockStreetRepository: StreetRepository = {
    findById: jest.fn(),
    findByName: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('GetStreetById Use Case', () => {
    let getStreetById: GetStreetById;

    beforeEach(() => {
        getStreetById = new GetStreetById(mockStreetRepository);
    });

    it('should return street by id', async () => {
        const street = new Street('1', new StreetName('Street 1'));

        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(street);

        const result = await getStreetById.execute('1');

        expect(result).toEqual(street);
        expect(mockStreetRepository.findById).toHaveBeenCalledWith('1');
    });

    it('should throw an error if street not found', async () => {
        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(getStreetById.execute('1')).rejects.toThrow(NotFoundError);
    });
});
