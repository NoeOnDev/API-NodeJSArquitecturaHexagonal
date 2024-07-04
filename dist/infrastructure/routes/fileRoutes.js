"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/fileRoutes.ts
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const FileController_1 = require("../controllers/FileController");
const fileUpload_1 = require("../middleware/fileUpload");
const fileController = tsyringe_1.container.resolve(FileController_1.FileController);
const router = (0, express_1.Router)();
router.post('/upload', fileUpload_1.upload.single('image'), (req, res) => fileController.uploadImage(req, res));
router.get('/images/:filename', (req, res) => fileController.getImage(req, res));
exports.default = router;
