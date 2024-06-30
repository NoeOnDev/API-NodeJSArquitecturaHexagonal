"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users.push(user);
            console.log('User saved:', this.users);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.email === email) || null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === id) || null;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users = this.users.filter(user => user.id !== id);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex(u => u.id === user.id);
            if (index !== -1) {
                this.users[index] = user;
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
