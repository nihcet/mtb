import { Router } from 'express';

import showtimeService from '../service/showtime';

const router = Router();

router.get('/', showtimeService.listShowtime);

export default router;
