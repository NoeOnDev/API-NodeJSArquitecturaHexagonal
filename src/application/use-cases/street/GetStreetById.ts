// src/application/use-cases/street/GetStreetById.ts
import { injectable, inject } from 'tsyringe';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class GetStreetById {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(id: string): Promise<Street | null> {
        const street = await this.streetRepository.findById(id);
        if (!street) {
            throw new NotFoundError('Street not found');
        }
        return street;
    }
}
