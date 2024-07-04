// src/infrastructure/routes/streetRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { StreetController } from '../controllers/StreetController';

const streetController = container.resolve(StreetController);
const router = Router();

router.post('/streets', (req, res) => streetController.create(req, res));
router.get('/streets/:id', (req, res) => streetController.getById(req, res));
router.get('/streets', (req, res) => streetController.getAll(req, res));

export default router;