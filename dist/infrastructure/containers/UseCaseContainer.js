"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/containers/UseCaseContainer.ts
const tsyringe_1 = require("tsyringe");
const CreateUser_1 = require("../../application/use-cases/user/CreateUser");
const GetUserById_1 = require("../../application/use-cases/user/GetUserById");
const GetAllUsers_1 = require("../../application/use-cases/user/GetAllUsers");
const CreateStreet_1 = require("../../application/use-cases/street/CreateStreet");
const GetStreetById_1 = require("../../application/use-cases/street/GetStreetById");
const GetAllStreets_1 = require("../../application/use-cases/street/GetAllStreets");
tsyringe_1.container.register('CreateUser', { useClass: CreateUser_1.CreateUser });
tsyringe_1.container.register('GetUserById', { useClass: GetUserById_1.GetUserById });
tsyringe_1.container.register('GetAllUsers', { useClass: GetAllUsers_1.GetAllUsers });
tsyringe_1.container.register('CreateStreet', { useClass: CreateStreet_1.CreateStreet });
tsyringe_1.container.register('GetStreetById', { useClass: GetStreetById_1.GetStreetById });
tsyringe_1.container.register('GetAllStreets', { useClass: GetAllStreets_1.GetAllStreets });
