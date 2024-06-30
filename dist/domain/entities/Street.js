"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
// src/domain/entities/Street.ts
const uuid_1 = require("uuid");
class Street {
    constructor(id = (0, uuid_1.v4)(), name) {
        this.id = id;
        this.name = name;
    }
}
exports.Street = Street;
