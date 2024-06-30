// src/infrastructure/containers/RepositoryContainer.ts
import { container } from 'tsyringe';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { StreetRepository } from '../../domain/repositories/StreetRepository';
import { InMemoryUserRepository } from '../adapters/persistence/InMemoryUserRepository';
import { InMemoryStreetRepository } from '../adapters/persistence/InMemoryStreetRepository';

container.registerSingleton<UserRepository>('UserRepository', InMemoryUserRepository);
container.registerSingleton<StreetRepository>('StreetRepository', InMemoryStreetRepository);
