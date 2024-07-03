// src/infrastructure/middleware/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../application/errors/AppError';

export function errorMiddleware(error: Error, _req: Request, res: Response, _next: NextFunction) {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
