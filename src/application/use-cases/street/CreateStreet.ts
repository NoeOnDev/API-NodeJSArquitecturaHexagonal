// src/application/use-cases/street/CreateStreet.ts
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

export class CreateStreet {
    constructor(private streetRepository: StreetRepository) { }

    async execute(id: string, name: string): Promise<void> {
        const street = new Street(id, name);
        await this.streetRepository.save(street);
    }
}