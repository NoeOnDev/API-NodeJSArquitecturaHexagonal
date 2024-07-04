"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/RepositoryContainer.ts
const tsyringe_1 = require("tsyringe");
const InMemoryUserRepository_1 = require("../persistence/memory/InMemoryUserRepository");
const InMemoryStreetRepository_1 = require("../persistence/memory/InMemoryStreetRepository");
tsyringe_1.container.registerSingleton('UserRepository', InMemoryUserRepository_1.InMemoryUserRepository);
tsyringe_1.container.registerSingleton('StreetRepository', InMemoryStreetRepository_1.InMemoryStreetRepository);
