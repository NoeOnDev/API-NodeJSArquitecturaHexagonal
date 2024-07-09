// src/infrastructure/containers/RepositoryContainer.ts
import { container } from 'tsyringe';
import { Pool } from 'pg';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { StreetRepository } from '../../domain/repositories/StreetRepository';
import { InMemoryUserRepository } from '../persistence/memory/InMemoryUserRepository';
import { InMemoryStreetRepository } from '../persistence/memory/InMemoryStreetRepository';
import { PostgresUserRepository } from '../persistence/postgres/PostgresUserRepository';
import { PostgresStreetRepository } from '../persistence/postgres/PostgresStreetRepository';
import { MongoUserRepository } from '../persistence/mongo/MongoUserRepository';
import { MongoStreetRepository } from '../persistence/mongo/MongoStreetRepository';
import { pool } from '../config/postgresConfig';
import { connectMongoDB } from '../config/mongoConfig';
import { env } from '../config/env';

const persistenceMethod = env.persistenceMethod;

if (persistenceMethod === 'memory') {
    container.registerSingleton<UserRepository>('UserRepository', InMemoryUserRepository);
    container.registerSingleton<StreetRepository>('StreetRepository', InMemoryStreetRepository);
} else if (persistenceMethod === 'postgres') {
    pool.connect().then(() => console.log('Connected to Postgres')).catch((err) => console.error(err));
    container.registerSingleton<UserRepository>('UserRepository', PostgresUserRepository);
    container.registerSingleton<StreetRepository>('StreetRepository', PostgresStreetRepository);
    container.register<Pool>('PostgresPool', { useValue: pool });
} else if (persistenceMethod === 'mongo') {
    connectMongoDB();
    container.registerSingleton<UserRepository>('UserRepository', MongoUserRepository);
    container.registerSingleton<StreetRepository>('StreetRepository', MongoStreetRepository);
} else {
    throw new Error(`Unknown persistence method: ${persistenceMethod}`);
}
