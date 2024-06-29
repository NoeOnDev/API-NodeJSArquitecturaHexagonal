"use strict";
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
exports.StreetController = void 0;
class StreetController {
    constructor(createStreet, getStreetById, getAllStreets) {
        this.createStreet = createStreet;
        this.getStreetById = getStreetById;
        this.getAllStreets = getAllStreets;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = req.body;
            yield this.createStreet.execute(id, name);
            res.status(201).send();
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const street = yield this.getStreetById.execute(id);
            if (street) {
                res.json(street);
            }
            else {
                res.status(404).send();
            }
        });
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const streets = yield this.getAllStreets.execute();
            res.json(streets);
        });
    }
}
exports.StreetController = StreetController;
