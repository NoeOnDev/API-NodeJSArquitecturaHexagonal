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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUser_1 = require("../../application/use-cases/user/CreateUser");
const GetUserById_1 = require("../../application/use-cases/user/GetUserById");
const GetAllUsers_1 = require("../../application/use-cases/user/GetAllUsers");
let UserController = class UserController {
    constructor(createUser, getUserById, getAllUsers) {
        this.createUser = createUser;
        this.getUserById = getUserById;
        this.getAllUsers = getAllUsers;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, street, email, password } = req.body;
            yield this.createUser.execute(username, street, email, password);
            res.status(201).send();
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.getUserById.execute(id);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).send();
            }
        });
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getAllUsers.execute();
            res.json(users);
        });
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
