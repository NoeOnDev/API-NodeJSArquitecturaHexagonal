// src/application/use-cases/street/GetAllStreets.ts
import { injectable, inject } from 'tsyringe';
import { Street } from "../../../domain/entities/Street";
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

@injectable()
export class GetAllStreets {
    constructor(@inject('StreetRepository') private streetRepository: StreetRepository) { }

    async execute(): Promise<Street[]> {
        return await this.streetRepository.findAll();
    }
}