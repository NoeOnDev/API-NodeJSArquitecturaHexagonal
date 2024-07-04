// src/infrastructure/middleware/validation/streetValidation.ts
import { body } from 'express-validator';

export const validateStreet = [
    body('name').notEmpty().withMessage('Street name is required')
];
