"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/domain/entities/User.ts
class User {
    constructor(id, username, street, email, password) {
        this.id = id;
        this.username = username;
        this.street = street;
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
