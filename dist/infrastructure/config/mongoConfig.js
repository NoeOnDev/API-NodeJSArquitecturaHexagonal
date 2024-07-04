"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = void 0;
// src/infrastructure/config/mongoConfig.ts
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const connectToMongo = async () => {
    try {
        await mongoose_1.default.connect(env_1.env.mongo.uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};
exports.connectToMongo = connectToMongo;
