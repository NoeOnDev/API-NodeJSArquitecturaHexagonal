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
exports.InMemoryStreetRepository = void 0;
class InMemoryStreetRepository {
    constructor() {
        this.streets = [];
    }
    save(street) {
        return __awaiter(this, void 0, void 0, function* () {
            this.streets.push(street);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.streets.find(street => street.name.toString() === name) || null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.streets.find(street => street.id === id) || null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.streets;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.streets = this.streets.filter(street => street.id !== id);
        });
    }
    update(street) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.streets.findIndex(s => s.id === street.id);
            if (index !== -1) {
                this.streets[index] = street;
            }
        });
    }
}
exports.InMemoryStreetRepository = InMemoryStreetRepository;
