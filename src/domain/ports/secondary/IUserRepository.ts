import { User } from '../../entities/User';

export interface IUserRepository {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    deleteById(id: string): Promise<void>;
    findAll(): Promise<User[]>;
    findByName(name: string): Promise<User[]>;
}