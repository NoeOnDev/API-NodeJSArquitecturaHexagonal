"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStreetRepository = void 0;
class InMemoryStreetRepository {
    constructor() {
        this.streets = [];
    }
    async save(street) {
        this.streets.push(street);
    }
    async findByName(name) {
        return this.streets.find(street => street.name.toString() === name) || null;
    }
    async findById(id) {
        return this.streets.find(street => street.id === id) || null;
    }
    async findAll() {
        return this.streets;
    }
    async deleteById(id) {
        this.streets = this.streets.filter(street => street.id !== id);
    }
    async update(street) {
        const index = this.streets.findIndex(s => s.id === street.id);
        if (index !== -1) {
            this.streets[index] = street;
        }
    }
}
exports.InMemoryStreetRepository = InMemoryStreetRepository;
