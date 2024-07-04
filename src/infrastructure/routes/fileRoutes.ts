// src/infrastructure/routes/fileRoutes.ts
import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { FileController } from '../controllers/FileController';
import { upload } from '../middleware/fileUpload';

const fileController = container.resolve(FileController);
const router = Router();

router.post('/upload', upload.single('image'), (req: Request, res: Response) => fileController.uploadImage(req, res));
router.get('/images/:filename', (req: Request, res: Response) => fileController.getImage(req, res));

export default router;
