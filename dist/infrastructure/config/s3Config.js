"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
// src/infrastructure/config/s3Config.ts
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const env_1 = require("./env");
aws_sdk_1.default.config.update({
    region: env_1.env.aws.region,
    accessKeyId: env_1.env.aws.accessKeyId,
    secretAccessKey: env_1.env.aws.secretAccessKey,
});
exports.s3 = new aws_sdk_1.default.S3();
