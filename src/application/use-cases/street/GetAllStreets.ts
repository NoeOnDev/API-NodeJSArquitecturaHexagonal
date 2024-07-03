// src/application/use-cases/street/GetAllStreets.ts
import { injectable, inject } from 'tsyringe';
import { Street } from "../../../domain/entities/Street";
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { AppError } from '../../errors/AppError';

@injectable()
export class GetAllStreets {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(): Promise<Street[]> {
        try {
            return await this.streetRepository.findAll();
        } catch (error) {
            throw new AppError('Unable to retrieve streets', 500);
        }
    }
}
