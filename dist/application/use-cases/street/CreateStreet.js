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
exports.CreateStreet = void 0;
// src/application/use-cases/street/CreateStreet.ts
const tsyringe_1 = require("tsyringe");
const uuid_1 = require("uuid");
const Street_1 = require("../../../domain/entities/Street");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const ValidationError_1 = require("../../errors/ValidationError");
let CreateStreet = class CreateStreet {
    constructor(streetRepository) {
        this.streetRepository = streetRepository;
    }
    async execute(name) {
        if (!name) {
            throw new ValidationError_1.ValidationError('Street name is required');
        }
        const id = (0, uuid_1.v4)();
        const street = new Street_1.Street(id, new StreetName_1.StreetName(name));
        await this.streetRepository.save(street);
    }
};
exports.CreateStreet = CreateStreet;
exports.CreateStreet = CreateStreet = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('StreetRepository')),
    __metadata("design:paramtypes", [Object])
], CreateStreet);
