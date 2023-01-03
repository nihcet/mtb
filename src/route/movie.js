import { Router } from 'express';

import movieService from '../service/movie';

const router = Router();

router.get('/', movieService.listMovie);
router.post('/', movieService.addMovie);

export default router;
