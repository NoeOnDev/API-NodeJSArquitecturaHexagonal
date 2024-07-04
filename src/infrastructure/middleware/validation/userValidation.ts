// src/infrastructure/middleware/validation/userValidation.ts
import { body } from "express-validator";

export const validateUser = [
    body('username').notEmpty().withMessage('Username is required'),
    body('street').notEmpty().withMessage('Street is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
