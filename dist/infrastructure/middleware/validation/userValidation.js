"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
// src/infrastructure/middleware/validation/userValidation.ts
const express_validator_1 = require("express-validator");
exports.validateUser = [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('street').notEmpty().withMessage('Street is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
