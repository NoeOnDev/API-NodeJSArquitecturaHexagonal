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
exports.CreateStreet = void 0;
// src/application/use-cases/street/CreateStreet.ts
const Street_1 = require("../../../domain/entities/Street");
class CreateStreet {
    constructor(streetRepository) {
        this.streetRepository = streetRepository;
    }
    execute(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const street = new Street_1.Street(id, name);
            yield this.streetRepository.save(street);
        });
    }
}
exports.CreateStreet = CreateStreet;
