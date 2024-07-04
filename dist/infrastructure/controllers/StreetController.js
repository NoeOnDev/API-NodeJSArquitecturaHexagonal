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
exports.StreetController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateStreet_1 = require("../../application/use-cases/street/CreateStreet");
const GetStreetById_1 = require("../../application/use-cases/street/GetStreetById");
const GetAllStreets_1 = require("../../application/use-cases/street/GetAllStreets");
const AppError_1 = require("../../application/errors/AppError");
const NotFoundError_1 = require("../../application/errors/NotFoundError");
let StreetController = class StreetController {
    constructor(createStreet, getStreetById, getAllStreets) {
        this.createStreet = createStreet;
        this.getStreetById = getStreetById;
        this.getAllStreets = getAllStreets;
    }
    async create(req, res) {
        try {
            const { name } = req.body;
            await this.createStreet.execute(name);
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
            const street = await this.getStreetById.execute(id);
            if (!street) {
                throw new NotFoundError_1.NotFoundError('Street not found');
            }
            res.json(street.toJSON());
        }
        catch (error) {
            if (error instanceof NotFoundError_1.NotFoundError) {
                res.status(404).json({ message: error.message });
            }
            else if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
    async getAll(_req, res) {
        try {
            const streets = await this.getAllStreets.execute();
            res.json(streets.map(street => street.toJSON()));
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
exports.StreetController = StreetController;
exports.StreetController = StreetController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('CreateStreet')),
    __param(1, (0, tsyringe_1.inject)('GetStreetById')),
    __param(2, (0, tsyringe_1.inject)('GetAllStreets')),
    __metadata("design:paramtypes", [CreateStreet_1.CreateStreet,
        GetStreetById_1.GetStreetById,
        GetAllStreets_1.GetAllStreets])
], StreetController);
