// src/infrastructure/config/postgresConfig.ts
import { Pool } from "pg";

export const pool = new Pool({
    user: 'noeon',
    host: 'localhost',
    database: 'test',
    password: 'noeon5885',
    port: 5432,
});