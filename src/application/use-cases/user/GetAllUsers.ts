// src/application/use-cases/user/GetAllUsers.ts
import { injectable, inject } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { AppError } from '../../errors/AppError';

@injectable()
export class GetAllUsers {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(): Promise<User[]> {
        try {
            return await this.userRepository.findAll();
        } catch (error) {
            throw new AppError('Unable to retrieve users', 500);
        }
    }
}
