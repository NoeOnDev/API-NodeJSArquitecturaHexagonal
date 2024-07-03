// src/infrastructure/controllers/UserController.ts
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { CreateUser } from '../../application/use-cases/user/CreateUser';
import { GetUserById } from '../../application/use-cases/user/GetUserById';
import { GetAllUsers } from '../../application/use-cases/user/GetAllUsers';
import { AppError } from '../../application/errors/AppError';
import { NotFoundError } from '../../application/errors/NotFoundError';

@injectable()
export class UserController {
    constructor(
        @inject('CreateUser') private createUser: CreateUser,
        @inject('GetUserById') private getUserById: GetUserById,
        @inject('GetAllUsers') private getAllUsers: GetAllUsers
    ) { }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const { username, street, email, password } = req.body;
            await this.createUser.execute(username, street, email, password);
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
            const user = await this.getUserById.execute(id);
            if (user) {
                res.json(user.toJSON());
            } else {
                throw new NotFoundError('User not found');
            }
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const users = await this.getAllUsers.execute();
            res.json(users.map(user => user.toJSON()));
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
}
