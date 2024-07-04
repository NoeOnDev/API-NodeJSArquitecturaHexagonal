// src/infrastructure/routes/userRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/UserController';

const userController = container.resolve(UserController);
const router = Router();

router.post('/users', (req, res) => userController.create(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.get('/users', (req, res) => userController.getAll(req, res));

export default router;
