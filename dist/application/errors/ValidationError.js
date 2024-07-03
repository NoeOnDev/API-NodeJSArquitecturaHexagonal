"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
// src/application/errors/ValidationError.ts
const AppError_1 = require("./AppError");
class ValidationError extends AppError_1.AppError {
    constructor(message) {
        super(message, 400);
    }
}
exports.ValidationError = ValidationError;
