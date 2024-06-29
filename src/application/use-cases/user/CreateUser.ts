// src/application/use-cases/user/CreateUser.ts
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async execute(id: string, username: string, street: string, email: string, password: string): Promise<void> {
        const user = new User(id, username, street, email, password);
        await this.userRepository.save(user);
    }
}