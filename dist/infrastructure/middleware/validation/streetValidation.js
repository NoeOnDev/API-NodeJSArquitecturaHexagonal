"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStreet = void 0;
// src/infrastructure/middleware/validation/streetValidation.ts
const express_validator_1 = require("express-validator");
exports.validateStreet = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Street name is required')
];
