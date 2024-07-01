// src/application/use-cases/user/GetUserById.ts
import { injectable, inject } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

@injectable()
export class GetUserById {
    constructor(@inject('UserRepository') private userRepository: UserRepository) {}

    async execute(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }
}
