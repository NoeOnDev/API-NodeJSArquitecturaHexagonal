// src/infrastructure/middleware/validation/validationHandler.ts
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
};
