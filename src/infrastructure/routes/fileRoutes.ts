// src/infrastructure/routes/fileRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { FileController } from '../controllers/FileController';

const fileController = container.resolve(FileController);
const router = Router();

router.post('/upload', (req, res) => fileController.uploadImage(req, res));
router.get('/images/:filename', (req, res) => fileController.getImage(req, res));

export default router;