"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/RepositoryContainer.ts
const tsyringe_1 = require("tsyringe");
const InMemoryUserRepository_1 = require("../persistence/memory/InMemoryUserRepository");
const InMemoryStreetRepository_1 = require("../persistence/memory/InMemoryStreetRepository");
const PostgresUserRepository_1 = require("../persistence/postgres/PostgresUserRepository");
const PostgresStreetRepository_1 = require("../persistence/postgres/PostgresStreetRepository");
const postgresConfig_1 = require("../config/postgresConfig");
const env_1 = require("../config/env");
const persistenceMethod = env_1.env.persistenceMethod;
if (persistenceMethod === 'memory') {
    tsyringe_1.container.registerSingleton('UserRepository', InMemoryUserRepository_1.InMemoryUserRepository);
    tsyringe_1.container.registerSingleton('StreetRepository', InMemoryStreetRepository_1.InMemoryStreetRepository);
}
else if (persistenceMethod === 'postgres') {
    tsyringe_1.container.registerSingleton('UserRepository', PostgresUserRepository_1.PostgresUserRepository);
    tsyringe_1.container.registerSingleton('StreetRepository', PostgresStreetRepository_1.PostgresStreetRepository);
    tsyringe_1.container.register('PostgresPool', { useValue: postgresConfig_1.pool });
}
else {
    throw new Error(`Unknown persistence method: ${persistenceMethod}`);
}
