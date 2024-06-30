// src/infrastructure/adapters/controllers/UserController.ts
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { CreateUser } from '../../../application/use-cases/user/CreateUser';
import { GetUserById } from '../../../application/use-cases/user/GetUserById';
import { GetAllUsers } from '../../../application/use-cases/user/GetAllUsers';

@injectable()
export class UserController {
    constructor(
        @inject('CreateUser') private createUser: CreateUser,
        @inject('GetUserById') private getUserById: GetUserById,
        @inject('GetAllUsers') private getAllUsers: GetAllUsers
    ) { }

    async create(req: Request, res: Response): Promise<void> {
        const { id, username, street, email, password } = req.body;
        await this.createUser.execute(id, username, street, email, password);
        res.status(201).send();
    }

    async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const user = await this.getUserById.execute(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send();
        }
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        const users = await this.getAllUsers.execute();
        res.json(users);
    }
}
