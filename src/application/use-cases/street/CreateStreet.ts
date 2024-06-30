// src/application/use-cases/street/CreateStreet.ts
import { injectable, inject } from 'tsyringe';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

@injectable()
export class CreateStreet {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(id: string, name: string): Promise<void> {
        const street = new Street(id, name);
        await this.streetRepository.save(street);
    }
}