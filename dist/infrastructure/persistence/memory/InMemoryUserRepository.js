"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
    async findByEmail(email) {
        return this.users.find(user => user.email.toString() === email) || null;
    }
    async findById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    async deleteById(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    async update(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }
    async findAll() {
        return this.users;
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
