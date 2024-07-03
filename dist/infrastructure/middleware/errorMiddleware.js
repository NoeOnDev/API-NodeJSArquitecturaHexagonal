"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const AppError_1 = require("../../application/errors/AppError");
function errorMiddleware(error, _req, res, _next) {
    if (error instanceof AppError_1.AppError) {
        res.status(error.statusCode).json({ message: error.message });
    }
    else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
