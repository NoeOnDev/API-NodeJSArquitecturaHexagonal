import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/UserController';
import { validateUser } from '../middleware/validation/userValidation';
import { validationHandler } from '../middleware/validation/validationHandler';
import { upload } from '../middleware/fileUpload';

const userController = container.resolve(UserController);
const router = Router();

router.post('/users', upload.single('image'), validateUser, validationHandler, (req: Request, res: Response) => userController.create(req, res));
router.get('/users/:id', (req: Request, res: Response) => userController.getById(req, res));
router.get('/users', (req: Request, res: Response) => userController.getAll(req, res));
router.delete('/users/:id', (req: Request, res: Response) => userController.delete(req, res));
router.put('/users/:id', upload.single('image'), validateUser, validationHandler, (req: Request, res: Response) => userController.update(req, res));

export default router;
