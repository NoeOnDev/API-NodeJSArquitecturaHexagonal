// src/application/use-cases/user/CreateUser.ts
import { injectable, inject } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

@injectable()
export class CreateUser {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(id: string, username: string, street: string, email: string, password: string): Promise<void> {
        const user = new User(id, username, street, email, password);
        await this.userRepository.save(user);
    }
}
