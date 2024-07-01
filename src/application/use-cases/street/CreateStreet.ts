// src/application/use-cases/street/CreateStreet.ts
import { injectable, inject } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

@injectable()
export class CreateStreet {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(name: string): Promise<void> {
        const id = uuidv4();
        const street = new Street(id, name);
        await this.streetRepository.save(street);
    }
}
