import express from 'express';
import { usersController } from '../controllers';

const router = express.Router();

router.get('/', usersController.list);
router.get('/:id', usersController.find);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.del);

export default router;
