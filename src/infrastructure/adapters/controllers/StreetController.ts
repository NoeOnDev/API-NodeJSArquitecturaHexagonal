// src/infrastructure/adapters/controllers/StreetController.ts
import { Request, Response } from 'express';
import { CreateStreet } from '../../../application/use-cases/street/CreateStreet';
import { GetStreetById } from '../../../application/use-cases/street/GetStreetById';
import { GetAllStreets } from '../../../application/use-cases/street/GetAllStreets';

export class StreetController {
    constructor(
        private createStreet: CreateStreet,
        private getStreetById: GetStreetById,
        private getAllStreets: GetAllStreets
    ) { }

    async create(req: Request, res: Response): Promise<void> {
        const { id, name } = req.body;
        await this.createStreet.execute(id, name);
        res.status(201).send();
    }

    async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const street = await this.getStreetById.execute(id);
        if (street) {
            res.json(street);
        } else {
            res.status(404).send();
        }
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        const streets = await this.getAllStreets.execute();
        res.json(streets);
    }
}
