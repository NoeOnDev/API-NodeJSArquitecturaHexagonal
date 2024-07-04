// src/infrastructure/containers/RepositoryContainer.ts
import { container } from 'tsyringe';
import { Pool } from 'pg';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { StreetRepository } from '../../domain/repositories/StreetRepository';
import { PostgresUserRepository } from '../persistence/postgres/PostgresUserRepository';
import { PostgresStreetRepository } from '../persistence/postgres/PostgresStreetRepository';
import { pool } from '../config/postgresConfig';

container.registerSingleton<UserRepository>('UserRepository', PostgresUserRepository);
container.registerSingleton<StreetRepository>('StreetRepository', PostgresStreetRepository);

container.register<Pool>('PostgresPool', { useValue: pool });
