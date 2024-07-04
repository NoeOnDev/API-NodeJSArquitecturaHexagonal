"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/userRoutes.ts
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const UserController_1 = require("../controllers/UserController");
const userController = tsyringe_1.container.resolve(UserController_1.UserController);
const router = (0, express_1.Router)();
router.post('/users', (req, res) => userController.create(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.get('/users', (req, res) => userController.getAll(req, res));
exports.default = router;
