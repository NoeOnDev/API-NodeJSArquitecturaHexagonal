"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/RepositoryContainer.ts
const tsyringe_1 = require("tsyringe");
const InMemoryUserRepository_1 = require("../persistence/memory/InMemoryUserRepository");
const InMemoryStreetRepository_1 = require("../persistence/memory/InMemoryStreetRepository");
const PostgresUserRepository_1 = require("../persistence/postgres/PostgresUserRepository");
const PostgresStreetRepository_1 = require("../persistence/postgres/PostgresStreetRepository");
const MongoUserRepository_1 = require("../persistence/mongo/MongoUserRepository");
const MongoStreetRepository_1 = require("../persistence/mongo/MongoStreetRepository");
const postgresConfig_1 = require("../config/postgresConfig");
const mongoConfig_1 = require("../config/mongoConfig");
const env_1 = require("../config/env");
const persistenceMethod = env_1.env.persistenceMethod;
if (persistenceMethod === 'memory') {
    tsyringe_1.container.registerSingleton('UserRepository', InMemoryUserRepository_1.InMemoryUserRepository);
    tsyringe_1.container.registerSingleton('StreetRepository', InMemoryStreetRepository_1.InMemoryStreetRepository);
}
else if (persistenceMethod === 'postgres') {
    postgresConfig_1.pool.connect().then(() => console.log('Connected to Postgres')).catch((err) => console.error(err));
    tsyringe_1.container.registerSingleton('UserRepository', PostgresUserRepository_1.PostgresUserRepository);
    tsyringe_1.container.registerSingleton('StreetRepository', PostgresStreetRepository_1.PostgresStreetRepository);
    tsyringe_1.container.register('PostgresPool', { useValue: postgresConfig_1.pool });
}
else if (persistenceMethod === 'mongo') {
    (0, mongoConfig_1.connectMongoDB)();
    tsyringe_1.container.registerSingleton('UserRepository', MongoUserRepository_1.MongoUserRepository);
    tsyringe_1.container.registerSingleton('StreetRepository', MongoStreetRepository_1.MongoStreetRepository);
}
else {
    throw new Error(`Unknown persistence method: ${persistenceMethod}`);
}
