// tests/domain/entities/street.spec.ts
import { Street } from '../../../src/domain/entities/Street';
import { StreetName } from '../../../src/domain/value-objects/StreetName';

describe('Street Entity', () => {
    it('should create a street instance correctly', () => {
        const street = new Street('1', new StreetName('Main Street'));

        expect(street).toBeInstanceOf(Street);
        expect(street.id).toBe('1');
        expect(street.name.toString()).toBe('Main Street');
    });

    it('should serialize street to JSON correctly', () => {
        const street = new Street('1', new StreetName('Main Street'));

        const streetJSON = street.toJSON();

        expect(streetJSON).toEqual({
            id: '1',
            name: 'Main Street'
        });
    });
});
