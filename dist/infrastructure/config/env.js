"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
// src/infrastructure/config/env.ts
exports.env = {
    port: process.env.PORT,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    persistenceMethod: process.env.PERSISTENCE_METHOD,
};
