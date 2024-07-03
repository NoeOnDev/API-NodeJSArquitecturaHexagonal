// src/infrastructure/controllers/StreetController.ts
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { CreateStreet } from '../../application/use-cases/street/CreateStreet';
import { GetStreetById } from '../../application/use-cases/street/GetStreetById';
import { GetAllStreets } from '../../application/use-cases/street/GetAllStreets';
import { AppError } from '../../application/errors/AppError';
import { NotFoundError } from '../../application/errors/NotFoundError';

@injectable()
export class StreetController {
    constructor(
        @inject('CreateStreet') private createStreet: CreateStreet,
        @inject('GetStreetById') private getStreetById: GetStreetById,
        @inject('GetAllStreets') private getAllStreets: GetAllStreets
    ) { }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const { name } = req.body;
            await this.createStreet.execute(name);
            res.status(201).send();
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const street = await this.getStreetById.execute(id);
            if (!street) {
                throw new NotFoundError('Street not found');
            }
            res.json(street.toJSON());
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({ message: error.message });
            } else if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const streets = await this.getAllStreets.execute();
            res.json(streets.map(street => street.toJSON()));
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
}
