// src/infrastructure/adapters/persistence/InMemoryUserRepository.ts
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async deleteById(id: string): Promise<void> {
        this.users = this.users.filter(user => user.id !== id);
    }

    async update(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }
}
