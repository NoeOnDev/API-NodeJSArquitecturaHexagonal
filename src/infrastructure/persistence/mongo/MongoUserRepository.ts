// src/infrastructure/persistence/mongo/MongoUserRepository.ts
import { injectable } from 'tsyringe';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { UserModel } from './models/UserModel';
import { Email } from '../../../domain/value-objects/Email';
import { Username } from '../../../domain/value-objects/Username';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { Password } from '../../../domain/value-objects/Password';

@injectable()
export class MongoUserRepository implements UserRepository {
    async save(user: User): Promise<void> {
        const userModel = new UserModel({
            id: user.id,
            username: user.username.toString(),
            street: user.street.toString(),
            email: user.email.toString(),
            password: user.password.toString(),
            imageUrl: user.imageUrl,
        });
        await userModel.save();
    }

    async findByEmail(email: string): Promise<User | null> {
        const userDoc = await UserModel.findOne({ email });
        if (!userDoc) {
            return null;
        }
        return new User(userDoc.id, new Username(userDoc.username), new StreetName(userDoc.street), new Email(userDoc.email), new Password(userDoc.password), userDoc.imageUrl);
    }

    async findById(id: string): Promise<User | null> {
        const userDoc = await UserModel.findById(id);
        if (!userDoc) {
            return null;
        }
        return new User(userDoc.id, new Username(userDoc.username), new StreetName(userDoc.street), new Email(userDoc.email), new Password(userDoc.password), userDoc.imageUrl);
    }

    async deleteById(id: string): Promise<void> {
        await UserModel.findByIdAndDelete(id);
    }

    async update(user: User): Promise<void> {
        await UserModel.findByIdAndUpdate(user.id, {
            username: user.username.toString(),
            street: user.street.toString(),
            email: user.email.toString(),
            password: user.password.toString(),
            imageUrl: user.imageUrl,
        });
    }

    async findAll(): Promise<User[]> {
        const userDocs = await UserModel.find();
        return userDocs.map(userDoc => new User(userDoc.id, new Username(userDoc.username), new StreetName(userDoc.street), new Email(userDoc.email), new Password(userDoc.password), userDoc.imageUrl));
    }
}
