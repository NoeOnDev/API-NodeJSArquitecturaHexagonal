// src/application/use-cases/street/DeleteStreet.ts
import { injectable, inject } from 'tsyringe';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class DeleteUser {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        await this.userRepository.deleteById(id);
    }
}
