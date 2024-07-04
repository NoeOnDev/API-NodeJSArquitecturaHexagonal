// src/infrastructure/containers/RepositoryContainer.ts
import { container } from 'tsyringe';
import { Pool } from 'pg';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { StreetRepository } from '../../domain/repositories/StreetRepository';
import { InMemoryUserRepository } from '../persistence/memory/InMemoryUserRepository';
import { InMemoryStreetRepository } from '../persistence/memory/InMemoryStreetRepository';
import { PostgresUserRepository } from '../persistence/postgres/PostgresUserRepository';
import { PostgresStreetRepository } from '../persistence/postgres/PostgresStreetRepository';
import { pool } from '../config/postgresConfig';
import { env } from '../config/env';

const persistenceMethod = env.persistenceMethod;

if (persistenceMethod === 'memory') {
    container.registerSingleton<UserRepository>('UserRepository', InMemoryUserRepository);
    container.registerSingleton<StreetRepository>('StreetRepository', InMemoryStreetRepository);
} else if (persistenceMethod === 'postgres') {
    container.registerSingleton<UserRepository>('UserRepository', PostgresUserRepository);
    container.registerSingleton<StreetRepository>('StreetRepository', PostgresStreetRepository);
    container.register<Pool>('PostgresPool', { useValue: pool });
} else {
    throw new Error(`Unknown persistence method: ${persistenceMethod}`);
}
