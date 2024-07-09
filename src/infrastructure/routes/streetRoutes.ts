import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { StreetController } from '../controllers/StreetController';
import { validateStreet } from '../middleware/validation/streetValidation';
import { validationHandler } from '../middleware/validation/validationHandler';

const streetController = container.resolve(StreetController);
const router = Router();

router.post('/streets', validateStreet, validationHandler, (req: Request, res: Response) => streetController.create(req, res));
router.get('/streets/:id', (req: Request, res: Response) => streetController.getById(req, res));
router.get('/streets', (req: Request, res: Response) => streetController.getAll(req, res));
router.delete('/streets/:id', (req: Request, res: Response) => streetController.delete(req, res));
router.put('/streets/:id', validateStreet, validationHandler, (req: Request, res: Response) => streetController.update(req, res));

export default router;
