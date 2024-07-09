// src/application/use-cases/user/UpdateUser.ts
import { injectable, inject } from 'tsyringe';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { Email } from '../../../domain/value-objects/Email';
import { Username } from '../../../domain/value-objects/Username';
import { Password } from '../../../domain/value-objects/Password';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { ValidationError } from '../../errors/ValidationError';
import { NotFoundError } from '../../errors/NotFoundError';

@injectable()
export class UpdateUser {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(id: string, username: string, street: string, email: string, password: string, imageUrl?: string): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        if (!username || !street || !email || !password) {
            throw new ValidationError('All fields are required');
        }

        user.username = new Username(username);
        user.street = new StreetName(street);
        user.email = new Email(email);
        user.password = new Password(password);
        user.imageUrl = imageUrl;

        await this.userRepository.update(user);
    }
}
