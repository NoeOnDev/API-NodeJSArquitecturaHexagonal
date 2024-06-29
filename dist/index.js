"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const InMemoryUserRepository_1 = require("./infrastructure/adapters/persistence/InMemoryUserRepository");
const InMemoryStreetRepository_1 = require("./infrastructure/adapters/persistence/InMemoryStreetRepository");
const CreateUser_1 = require("./application/use-cases/user/CreateUser");
const GetUserById_1 = require("./application/use-cases/user/GetUserById");
const GetAllUsers_1 = require("./application/use-cases/user/GetAllUsers");
const UserController_1 = require("./infrastructure/adapters/controllers/UserController");
const CreateStreet_1 = require("./application/use-cases/street/CreateStreet");
const GetStreetById_1 = require("./application/use-cases/street/GetStreetById");
const GetAllStreets_1 = require("./application/use-cases/street/GetAllStreets");
const StreetController_1 = require("./infrastructure/adapters/controllers/StreetController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
const streetRepository = new InMemoryStreetRepository_1.InMemoryStreetRepository();
const userController = new UserController_1.UserController(new CreateUser_1.CreateUser(userRepository), new GetUserById_1.GetUserById(userRepository), new GetAllUsers_1.GetAllUsers(userRepository));
const streetController = new StreetController_1.StreetController(new CreateStreet_1.CreateStreet(streetRepository), new GetStreetById_1.GetStreetById(streetRepository), new GetAllStreets_1.GetAllStreets(streetRepository));
app.post('/users', (req, res) => userController.create(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.get('/users', (req, res) => userController.getAll(req, res));
app.post('/streets', (req, res) => streetController.create(req, res));
app.get('/streets/:id', (req, res) => streetController.getById(req, res));
app.get('/streets', (req, res) => streetController.getAll(req, res));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
