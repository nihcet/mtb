import { Router } from 'express';

import bookingService from '../service/booking';

const router = Router();

router.get('/', bookingService.listBooking);

export default router;
