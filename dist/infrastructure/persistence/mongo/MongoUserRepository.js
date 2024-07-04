"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
// src/infrastructure/persistence/mongo/MongoUserRepository.ts
const tsyringe_1 = require("tsyringe");
const User_1 = require("../../../domain/entities/User");
const UserModel_1 = require("./models/UserModel");
const Email_1 = require("../../../domain/value-objects/Email");
const Username_1 = require("../../../domain/value-objects/Username");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const Password_1 = require("../../../domain/value-objects/Password");
let MongoUserRepository = class MongoUserRepository {
    async save(user) {
        const userModel = new UserModel_1.UserModel({
            id: user.id,
            username: user.username.toString(),
            street: user.street.toString(),
            email: user.email.toString(),
            password: user.password.toString(),
            imageUrl: user.imageUrl,
        });
        await userModel.save();
    }
    async findByEmail(email) {
        const userDoc = await UserModel_1.UserModel.findOne({ email });
        if (!userDoc) {
            return null;
        }
        return new User_1.User(userDoc.id, new Username_1.Username(userDoc.username), new StreetName_1.StreetName(userDoc.street), new Email_1.Email(userDoc.email), new Password_1.Password(userDoc.password), userDoc.imageUrl);
    }
    async findById(id) {
        const userDoc = await UserModel_1.UserModel.findById(id);
        if (!userDoc) {
            return null;
        }
        return new User_1.User(userDoc.id, new Username_1.Username(userDoc.username), new StreetName_1.StreetName(userDoc.street), new Email_1.Email(userDoc.email), new Password_1.Password(userDoc.password), userDoc.imageUrl);
    }
    async deleteById(id) {
        await UserModel_1.UserModel.findByIdAndDelete(id);
    }
    async update(user) {
        await UserModel_1.UserModel.findByIdAndUpdate(user.id, {
            username: user.username.toString(),
            street: user.street.toString(),
            email: user.email.toString(),
            password: user.password.toString(),
            imageUrl: user.imageUrl,
        });
    }
    async findAll() {
        const userDocs = await UserModel_1.UserModel.find();
        return userDocs.map(userDoc => new User_1.User(userDoc.id, new Username_1.Username(userDoc.username), new StreetName_1.StreetName(userDoc.street), new Email_1.Email(userDoc.email), new Password_1.Password(userDoc.password), userDoc.imageUrl));
    }
};
exports.MongoUserRepository = MongoUserRepository;
exports.MongoUserRepository = MongoUserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], MongoUserRepository);
