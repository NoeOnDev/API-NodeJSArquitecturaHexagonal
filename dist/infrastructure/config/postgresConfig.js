"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// src/infrastructure/config/postgresConfig.ts
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'noeon',
    host: 'localhost',
    database: 'test',
    password: 'noeon5885',
    port: 5432,
});
