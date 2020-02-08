import express from 'express';
import { postsControllers } from '../controllers';

const router = express.Router();

router.get('/', postsControllers.list);
router.get('/:id', postsControllers.find);
router.post('/', postsControllers.create);
router.put('/:id', postsControllers.update);
router.delete('/:id', postsControllers.del);

export default router;
