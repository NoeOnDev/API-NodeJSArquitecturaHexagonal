// src/domain/repositories/StreetRepository.ts
import { Street } from "../entities/Street";

export interface StreetRepository {
    save(street: Street): Promise<void>
    findByName(name: string): Promise<Street | null>
    findById(id: string): Promise<Street | null>
    findAll(): Promise<Street[]>
    deleteById(id: string): Promise<void>
    update(street: Street): Promise<void>
}
