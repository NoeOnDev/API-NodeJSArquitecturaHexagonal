// src/application/use-cases/street/DeleteStreet.ts
import { injectable, inject } from 'tsyringe';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class DeleteStreet {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(id: string): Promise<void> {
        const street = await this.streetRepository.findById(id);
        if (!street) {
            throw new NotFoundError('Street not found');
        }
        await this.streetRepository.deleteById(id);
    }
}
