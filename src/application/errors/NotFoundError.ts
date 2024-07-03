// src/application/errors/NotFoundError.ts
import { AppError } from "./AppError";

export class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}