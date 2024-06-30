"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/domain/entities/User.ts
const uuid_1 = require("uuid");
class User {
    constructor(id = (0, uuid_1.v4)(), username, street, email, password) {
        this.id = id;
        this.username = username;
        this.street = street;
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
