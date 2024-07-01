// src/application/use-cases/user/GetAllUsers.ts
import { injectable, inject } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

@injectable()
export class GetAllUsers {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}
