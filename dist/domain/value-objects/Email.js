"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
// src/domain/value-objects/Email.ts
class Email {
    constructor(email) {
        if (!this.validate(email)) {
            throw new Error('Invalid email format');
        }
        this.email = email;
    }
    validate(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    toString() {
        return this.email;
    }
}
exports.Email = Email;
