// src/infrastructure/persistence/memory/InMemoryStreetRepository.ts
import { Street } from "../../../domain/entities/Street";
import { StreetRepository } from "../../../domain/repositories/StreetRepository";

export class InMemoryStreetRepository implements StreetRepository {
    private streets: Street[] = [];

    async save(street: Street): Promise<void> {
        this.streets.push(street);
    }

    async findByName(name: string): Promise<Street | null> {
        return this.streets.find(street => street.name.toString() === name) || null;
    }

    async findById(id: string): Promise<Street | null> {
        return this.streets.find(street => street.id === id) || null;
    }

    async findAll(): Promise<Street[]> {
        return this.streets;
    }

    async deleteById(id: string): Promise<void> {
        this.streets = this.streets.filter(street => street.id !== id);
    }

    async update(street: Street): Promise<void> {
        const index = this.streets.findIndex(s => s.id === street.id);
        if (index !== -1) {
            this.streets[index] = street;
        }
    }
}
