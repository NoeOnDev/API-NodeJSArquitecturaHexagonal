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
exports.CreateUser = void 0;
// src/application/use-cases/user/CreateUser.ts
const tsyringe_1 = require("tsyringe");
const uuid_1 = require("uuid");
const User_1 = require("../../../domain/entities/User");
const Email_1 = require("../../../domain/value-objects/Email");
const Username_1 = require("../../../domain/value-objects/Username");
const Password_1 = require("../../../domain/value-objects/Password");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const ValidationError_1 = require("../../errors/ValidationError");
let CreateUser = class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(username, street, email, password, imageUrl) {
        if (!username || !street || !email || !password) {
            throw new ValidationError_1.ValidationError('All fields are required');
        }
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new ValidationError_1.ValidationError('User with this email already exists');
        }
        const id = (0, uuid_1.v4)();
        const user = new User_1.User(id, new Username_1.Username(username), new StreetName_1.StreetName(street), new Email_1.Email(email), new Password_1.Password(password), imageUrl);
        await this.userRepository.save(user);
    }
};
exports.CreateUser = CreateUser;
exports.CreateUser = CreateUser = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserRepository')),
    __metadata("design:paramtypes", [Object])
], CreateUser);
