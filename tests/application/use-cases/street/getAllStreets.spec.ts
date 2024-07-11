// tests/application/use-cases/street/getAllStreets.spec.ts
import { GetAllStreets } from '../../../../src/application/use-cases/street/GetAllStreets';
import { StreetRepository } from '../../../../src/domain/repositories/StreetRepository';
import { Street } from '../../../../src/domain/entities/Street';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { AppError } from '../../../../src/application/errors/AppError';

const mockStreetRepository: StreetRepository = {
    findById: jest.fn(),
    findByName: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('GetAllStreets Use Case', () => {
    let getAllStreets: GetAllStreets;

    beforeEach(() => {
        getAllStreets = new GetAllStreets(mockStreetRepository);
    });

    it('should return all streets', async () => {
        const streets = [
            new Street('1', new StreetName('Street 1')),
            new Street('2', new StreetName('Street 2'))
        ];

        (mockStreetRepository.findAll as jest.Mock).mockResolvedValue(streets);

        const result = await getAllStreets.execute();

        expect(result).toEqual(streets);
        expect(mockStreetRepository.findAll).toHaveBeenCalled();
    });

    it('should throw an error if unable to retrieve streets', async () => {
        (mockStreetRepository.findAll as jest.Mock).mockRejectedValue(new Error('Database error'));

        await expect(getAllStreets.execute()).rejects.toThrow(AppError);
    });
});
