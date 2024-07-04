"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUser_1 = require("../../application/use-cases/user/CreateUser");
const GetUserById_1 = require("../../application/use-cases/user/GetUserById");
const GetAllUsers_1 = require("../../application/use-cases/user/GetAllUsers");
const AppError_1 = require("../../application/errors/AppError");
const NotFoundError_1 = require("../../application/errors/NotFoundError");
let UserController = class UserController {
    constructor(createUser, getUserById, getAllUsers) {
        this.createUser = createUser;
        this.getUserById = getUserById;
        this.getAllUsers = getAllUsers;
    }
    async create(req, res) {
        try {
            const { username, street, email, password } = req.body;
            const imageUrl = req.file ? `/images/${req.file.filename}` : undefined;
            await this.createUser.execute(username, street, email, password, imageUrl);
            res.status(201).send();
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const user = await this.getUserById.execute(id);
            if (user) {
                res.json(user.toJSON());
            }
            else {
                throw new NotFoundError_1.NotFoundError('User not found');
            }
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
    async getAll(_req, res) {
        try {
            const users = await this.getAllUsers.execute();
            res.json(users.map(user => user.toJSON()));
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('CreateUser')),
    __param(1, (0, tsyringe_1.inject)('GetUserById')),
    __param(2, (0, tsyringe_1.inject)('GetAllUsers')),
    __metadata("design:paramtypes", [CreateUser_1.CreateUser,
        GetUserById_1.GetUserById,
        GetAllUsers_1.GetAllUsers])
], UserController);
