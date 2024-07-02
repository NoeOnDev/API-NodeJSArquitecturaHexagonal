"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Username = void 0;
// src/domain/value-objects/Username.ts
class Username {
    constructor(username) {
        if (!this.validate(username)) {
            throw new Error('Invalid username');
        }
        this.username = username;
    }
    validate(username) {
        return username.length > 0;
    }
    toString() {
        return this.username;
    }
}
exports.Username = Username;
