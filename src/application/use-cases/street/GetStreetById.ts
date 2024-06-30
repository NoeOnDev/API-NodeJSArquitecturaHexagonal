// src/application/use-cases/street/GetStreetById.ts
import { injectable, inject } from 'tsyringe';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

@injectable()
export class GetStreetById {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(id: string): Promise<Street | null> {
        return await this.streetRepository.findById(id);
    }
}