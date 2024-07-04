"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/RepositoryContainer.ts
const tsyringe_1 = require("tsyringe");
const PostgresUserRepository_1 = require("../persistence/postgres/PostgresUserRepository");
const PostgresStreetRepository_1 = require("../persistence/postgres/PostgresStreetRepository");
const postgresConfig_1 = require("../config/postgresConfig");
tsyringe_1.container.registerSingleton('UserRepository', PostgresUserRepository_1.PostgresUserRepository);
tsyringe_1.container.registerSingleton('StreetRepository', PostgresStreetRepository_1.PostgresStreetRepository);
tsyringe_1.container.register('PostgresPool', { useValue: postgresConfig_1.pool });
