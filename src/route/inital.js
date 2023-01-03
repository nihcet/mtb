import { Router } from 'express';

import initialService from '../service/initial';

const router = Router();

router.get('/', initialService.initialDatabase);

export default router;
