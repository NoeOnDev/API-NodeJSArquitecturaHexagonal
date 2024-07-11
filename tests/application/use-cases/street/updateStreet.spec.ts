// tests/application/use-cases/street/updateStreet.spec.ts
import { UpdateStreet } from '../../../../src/application/use-cases/street/UpdateStreet';
import { StreetRepository } from '../../../../src/domain/repositories/StreetRepository';
import { Street } from '../../../../src/domain/entities/Street';
import { StreetName } from '../../../../src/domain/value-objects/StreetName';
import { ValidationError } from '../../../../src/application/errors/ValidationError';
import { NotFoundError } from '../../../../src/application/errors/NotFoundError';

const mockStreetRepository: StreetRepository = {
    findById: jest.fn(),
    findByName: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('UpdateStreet Use Case', () => {
    let updateStreet: UpdateStreet;

    beforeEach(() => {
        updateStreet = new UpdateStreet(mockStreetRepository);
    });

    it('should update street successfully', async () => {
        const street = new Street('1', new StreetName('Street 1'));

        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(street);

        const updatedName = 'Updated Street 1';

        await expect(updateStreet.execute('1', updatedName)).resolves.not.toThrow();

        expect(street.name.toString()).toBe(updatedName);
        expect(mockStreetRepository.update).toHaveBeenCalledWith(street);
    });

    it('should throw an error if street not found', async () => {
        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(updateStreet.execute('1', 'Updated Street 1')).rejects.toThrow(NotFoundError);
    });

    it('should throw an error if street name is missing', async () => {
        const street = new Street('1', new StreetName('Street 1'));

        (mockStreetRepository.findById as jest.Mock).mockResolvedValue(street);

        await expect(updateStreet.execute('1', '')).rejects.toThrow(ValidationError);
    });
});
