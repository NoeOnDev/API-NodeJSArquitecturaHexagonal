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
exports.MongoStreetRepository = void 0;
const Street_1 = require("../../../domain/entities/Street");
const tsyringe_1 = require("tsyringe");
const mongodb_1 = require("mongodb");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
let MongoStreetRepository = class MongoStreetRepository {
    constructor(client) {
        this.client = client;
        this.db = this.client.db();
    }
    save(street) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.collection("streets").insertOne(street);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection("streets").findOne({ name });
            return result ? this.mapToDomain(result) : null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection("streets").findOne({ _id: new mongodb_1.ObjectId(id) });
            return result ? this.mapToDomain(result) : null;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.collection("streets").deleteOne({ _id: new mongodb_1.ObjectId(id) });
        });
    }
    update(street) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.collection("streets").updateOne({ _id: new mongodb_1.ObjectId(street.id) }, { $set: street });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.db.collection("streets").find().toArray();
            return results.map(this.mapToDomain);
        });
    }
    mapToDomain(doc) {
        return new Street_1.Street(doc._id.toString(), new StreetName_1.StreetName(doc.name));
    }
};
exports.MongoStreetRepository = MongoStreetRepository;
exports.MongoStreetRepository = MongoStreetRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("MongoClient")),
    __metadata("design:paramtypes", [mongodb_1.MongoClient])
], MongoStreetRepository);
