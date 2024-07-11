// tests/application/use-cases/street/createStreet.spec.ts
import { CreateStreet } from '../../../../src/application/use-cases/street/CreateStreet';
import { StreetRepository } from '../../../../src/domain/repositories/StreetRepository';
import { Street } from '../../../../src/domain/entities/Street';
import { ValidationError } from '../../../../src/application/errors/ValidationError';

const mockStreetRepository: StreetRepository = {
    findById: jest.fn(),
    findByName: jest.fn(),
    findAll: jest.fn(),
    save: jest.fn(),
    deleteById: jest.fn(),
    update: jest.fn()
};

describe('CreateStreet Use Case', () => {
    let createStreet: CreateStreet;

    beforeEach(() => {
        createStreet = new CreateStreet(mockStreetRepository);
    });

    it('should create a new street successfully', async () => {
        const name = 'Main Street';

        await expect(createStreet.execute(name)).resolves.not.toThrow();

        expect(mockStreetRepository.save).toHaveBeenCalledWith(expect.any(Street));
    });

    it('should throw an error if street name is missing', async () => {
        await expect(createStreet.execute('')).rejects.toThrow(ValidationError);
    });
});
