// src/application/use-cases/user/GetUserById.ts
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class GetUserById {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }
}