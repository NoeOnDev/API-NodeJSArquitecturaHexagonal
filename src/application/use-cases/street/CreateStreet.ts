// src/application/use-cases/street/CreateStreet.ts
import { injectable, inject } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { ValidationError } from '../../errors/ValidationError';

@injectable()
export class CreateStreet {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(name: string): Promise<void> {
        if (!name) {
            throw new ValidationError('Street name is required');
        }

        const id = uuidv4();
        const street = new Street(id, new StreetName(name));
        await this.streetRepository.save(street);
    }
}
