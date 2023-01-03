import { Router } from 'express';

import bookingHandler from './booking';
import branchHandler from './branch';
import initialHandler from './inital';
import movieHandler from './movie';
import seatHandler from './seat';
import showtimeHandler from './showtime';

const router = Router();

router.use('/booking', bookingHandler);
router.use('/branch', branchHandler);
router.use('/initial', initialHandler);
router.use('/movie', movieHandler);
router.use('/seat', seatHandler);
router.use('/showtime', showtimeHandler);

export default router;
