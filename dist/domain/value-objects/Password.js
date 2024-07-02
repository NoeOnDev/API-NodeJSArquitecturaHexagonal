"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
// src/domain/value-objects/Password.ts
class Password {
    constructor(password) {
        if (!this.validate(password)) {
            throw new Error('Invalid password');
        }
        this.password = password;
    }
    validate(password) {
        return password.length >= 6;
    }
    toString() {
        return this.password;
    }
}
exports.Password = Password;
