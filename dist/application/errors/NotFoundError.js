"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
// src/application/errors/NotFoundError.ts
const AppError_1 = require("./AppError");
class NotFoundError extends AppError_1.AppError {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
