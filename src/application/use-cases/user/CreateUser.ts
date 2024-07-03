// src/application/use-cases/user/CreateUser.ts
import { injectable, inject } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { Email } from '../../../domain/value-objects/Email';
import { Username } from '../../../domain/value-objects/Username';
import { Password } from '../../../domain/value-objects/Password';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { ValidationError } from '../../errors/ValidationError';

@injectable()
export class CreateUser {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }

    async execute(username: string, street: string, email: string, password: string, imageUrl?: string): Promise<void> {
        if (!username || !street || !email || !password) {
            throw new ValidationError('All fields are required');
        }

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new ValidationError('User with this email already exists');
        }

        const id = uuidv4();
        const user = new User(
            id,
            new Username(username),
            new StreetName(street),
            new Email(email),
            new Password(password),
            imageUrl
        );

        await this.userRepository.save(user);
    }
}
