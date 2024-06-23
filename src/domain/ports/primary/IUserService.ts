import { User } from '../../entities/User';

export interface IUserService {
    createUser(user: User): Promise<void>;
    updateUser(id: string, user: User): Promise<void>;
    deleteUser(id: string): Promise<void>;
    listUsers(): Promise<User[]>;
    findUsersByName(name: string): Promise<User[]>;
}