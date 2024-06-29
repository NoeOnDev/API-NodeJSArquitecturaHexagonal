// src/application/use-cases/street/GetStreetById.ts
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

export class GetStreetById {
    constructor(private streetRepository: StreetRepository) { }

    async execute(id: string): Promise<Street | null> {
        return await this.streetRepository.findById(id);
    }
}