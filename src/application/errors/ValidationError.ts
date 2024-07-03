// src/application/errors/ValidationError.ts
import { AppError } from "./AppError";

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}