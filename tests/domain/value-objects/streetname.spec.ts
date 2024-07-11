// tests/domain/value-objects/streetname.spec.ts
import { StreetName } from '../../../src/domain/value-objects/StreetName';

describe('StreetName Value Object', () => {
    it('should create a street name instance with valid name', () => {
        const streetName = new StreetName('Main Street');
        expect(streetName).toBeInstanceOf(StreetName);
        expect(streetName.toString()).toBe('Main Street');
    });

    it('should throw an error for invalid street name (empty)', () => {
        expect(() => new StreetName('')).toThrow('Invalid street name');
    });
});
