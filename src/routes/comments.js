import express from 'express';
import { commentsControllers } from '../controllers';

const router = express.Router();

router.get('/', commentsControllers.list);
router.get('/:id', commentsControllers.find);
router.post('/', commentsControllers.create);
router.put('/:id', commentsControllers.update);
router.delete('/:id', commentsControllers.del);

export default router;
