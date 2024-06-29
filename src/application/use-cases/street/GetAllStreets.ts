// src/application/use-cases/street/GetAllStreets.ts
import { Street } from "../../../domain/entities/Street";
import { StreetRepository } from '../../../domain/repositories/StreetRepository';

export class GetAllStreets {
    constructor(private streetRepository: StreetRepository) { }

    async execute(): Promise<Street[]> {
        return await this.streetRepository.findAll();
    }
}