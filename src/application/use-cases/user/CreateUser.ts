// src/application/use-cases/user/CreateUser.ts
import { injectable, inject } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

@injectable()
export class CreateUser {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(username: string, street: string, email: string, password: string): Promise<void> {
        const id = uuidv4();
        const user = new User(id, username, street, email, password);
        await this.userRepository.save(user);
    }
}
