// src/domain/repositories/UserRepository.ts
import { User } from "../entities/User"

export interface UserRepository {
    save(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
    deleteById(id: string): Promise<void>
    update(user: User): Promise<void>
    findAll(): Promise<User[]>
}