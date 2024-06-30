"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/RepositoryContainer.ts
const tsyringe_1 = require("tsyringe");
const InMemoryUserRepository_1 = require("../adapters/persistence/InMemoryUserRepository");
const InMemoryStreetRepository_1 = require("../adapters/persistence/InMemoryStreetRepository");
tsyringe_1.container.register('UserRepository', { useClass: InMemoryUserRepository_1.InMemoryUserRepository });
tsyringe_1.container.register('StreetRepository', { useClass: InMemoryStreetRepository_1.InMemoryStreetRepository });
