"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoStreetRepository = void 0;
// src/infrastructure/persistence/mongo/MongoStreetRepository.ts
const tsyringe_1 = require("tsyringe");
const Street_1 = require("../../../domain/entities/Street");
const StreetModel_1 = require("./models/StreetModel");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
let MongoStreetRepository = class MongoStreetRepository {
    async save(street) {
        const streetModel = new StreetModel_1.StreetModel({
            id: street.id,
            name: street.name.toString(),
        });
        await streetModel.save();
    }
    async findByName(name) {
        const streetDoc = await StreetModel_1.StreetModel.findOne({ name });
        if (!streetDoc) {
            return null;
        }
        return new Street_1.Street(streetDoc.id, new StreetName_1.StreetName(streetDoc.name));
    }
    async findById(id) {
        const streetDoc = await StreetModel_1.StreetModel.findById(id);
        if (!streetDoc) {
            return null;
        }
        return new Street_1.Street(streetDoc.id, new StreetName_1.StreetName(streetDoc.name));
    }
    async findAll() {
        const streetDocs = await StreetModel_1.StreetModel.find();
        return streetDocs.map(streetDoc => new Street_1.Street(streetDoc.id, new StreetName_1.StreetName(streetDoc.name)));
    }
    async deleteById(id) {
        await StreetModel_1.StreetModel.findByIdAndDelete(id);
    }
    async update(street) {
        await StreetModel_1.StreetModel.findByIdAndUpdate(street.id, {
            name: street.name.toString(),
        });
    }
};
exports.MongoStreetRepository = MongoStreetRepository;
exports.MongoStreetRepository = MongoStreetRepository = __decorate([
    (0, tsyringe_1.injectable)()
], MongoStreetRepository);
