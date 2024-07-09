"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
require("./infrastructure/containers/RepositoryContainer");
require("./infrastructure/containers/UseCaseContainer");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./infrastructure/routes/userRoutes"));
const streetRoutes_1 = __importDefault(require("./infrastructure/routes/streetRoutes"));
const fileRoutes_1 = __importDefault(require("./infrastructure/routes/fileRoutes"));
const postgresConfig_1 = require("./infrastructure/config/postgresConfig");
const errorMiddleware_1 = require("./infrastructure/middleware/errorMiddleware");
const env_1 = require("./infrastructure/config/env");
const PORT = env_1.env.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/images', express_1.default.static('images'));
app.use(userRoutes_1.default);
app.use(streetRoutes_1.default);
app.use(fileRoutes_1.default);
app.use(errorMiddleware_1.errorMiddleware);
postgresConfig_1.pool.connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error('Error connecting to database', err);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
