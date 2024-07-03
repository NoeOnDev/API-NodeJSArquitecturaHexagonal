// src/application/use-cases/user/GetUserById.ts
import { injectable, inject } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class GetUserById {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        return user;
    }
}
