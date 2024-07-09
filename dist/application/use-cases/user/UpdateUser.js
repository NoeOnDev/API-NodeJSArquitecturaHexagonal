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
exports.UpdateUser = void 0;
// src/application/use-cases/user/UpdateUser.ts
const tsyringe_1 = require("tsyringe");
const Email_1 = require("../../../domain/value-objects/Email");
const Username_1 = require("../../../domain/value-objects/Username");
const Password_1 = require("../../../domain/value-objects/Password");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const ValidationError_1 = require("../../errors/ValidationError");
const NotFoundError_1 = require("../../errors/NotFoundError");
let UpdateUser = class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, username, street, email, password, imageUrl) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError_1.NotFoundError('User not found');
        }
        if (!username || !street || !email || !password) {
            throw new ValidationError_1.ValidationError('All fields are required');
        }
        user.username = new Username_1.Username(username);
        user.street = new StreetName_1.StreetName(street);
        user.email = new Email_1.Email(email);
        user.password = new Password_1.Password(password);
        user.imageUrl = imageUrl;
        await this.userRepository.update(user);
    }
};
exports.UpdateUser = UpdateUser;
exports.UpdateUser = UpdateUser = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateUser);
