"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
require("./infrastructure/containers/RepositoryContainer");
require("./infrastructure/containers/UseCaseContainer");
const UserController_1 = require("./infrastructure/controllers/UserController");
const StreetController_1 = require("./infrastructure/controllers/StreetController");
const errorMiddleware_1 = require("./infrastructure/middleware/errorMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userController = tsyringe_1.container.resolve(UserController_1.UserController);
const streetController = tsyringe_1.container.resolve(StreetController_1.StreetController);
app.post('/users', (req, res) => userController.create(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.get('/users', (req, res) => userController.getAll(req, res));
app.post('/streets', (req, res) => streetController.create(req, res));
app.get('/streets/:id', (req, res) => streetController.getById(req, res));
app.get('/streets', (req, res) => streetController.getAll(req, res));
app.use(errorMiddleware_1.errorMiddleware);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
