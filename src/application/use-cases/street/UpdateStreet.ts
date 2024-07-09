// src/application/use-cases/street/UpdateStreet.ts
import { injectable, inject } from 'tsyringe';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { ValidationError } from '../../errors/ValidationError';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class UpdateStreet {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) {}

    async execute(id: string, name: string): Promise<void> {
        const street = await this.streetRepository.findById(id);
        if (!street) {
            throw new NotFoundError('Street not found');
        }

        if (!name) {
            throw new ValidationError('Street name is required');
        }

        street.name = new StreetName(name);

        await this.streetRepository.update(street);
    }
}
