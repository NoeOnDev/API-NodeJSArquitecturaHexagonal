"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreetName = void 0;
// src/domain/value-objects/StreetName.ts
class StreetName {
    constructor(name) {
        if (!this.validate(name)) {
            throw new Error('Invalid street name');
        }
        this.name = name;
    }
    validate(name) {
        return name.length > 0;
    }
    toString() {
        return this.name;
    }
}
exports.StreetName = StreetName;
