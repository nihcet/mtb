import { Router } from 'express';

import seatService from '../service/seat';

const router = Router();

router.get('/', seatService.listSeat);

export default router;
