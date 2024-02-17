import { Router} from 'express';
import { registerUser, getUsers, loginUser, searchUsers } from '../controllers/user.controller.js';

const router = Router();

router.post('/login', loginUser);
router.get('/users/search', searchUsers);
router.post('/users', registerUser);
router.get('/users', getUsers);

export default router;