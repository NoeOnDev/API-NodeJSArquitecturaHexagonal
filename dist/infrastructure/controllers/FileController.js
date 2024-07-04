"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const tsyringe_1 = require("tsyringe");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
let FileController = class FileController {
    uploadImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.file) {
                res.status(200).json({ imageUrl: `/images/${req.file.filename}` });
            }
            else {
                res.status(400).json({ message: 'No file uploaded' });
            }
        });
    }
    getImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filename } = req.params;
            const filePath = path_1.default.resolve(`images/${filename}`);
            if (fs_1.default.existsSync(filePath)) {
                res.sendFile(filePath);
            }
            else {
                res.status(404).json({ message: 'File not found' });
            }
        });
    }
};
exports.FileController = FileController;
exports.FileController = FileController = __decorate([
    (0, tsyringe_1.injectable)()
], FileController);
