import { bookingRepo } from '../repository'
import { datetimeUtil } from '../util';

const bookingService = {};

bookingService.listBooking = async (req, res, next) => {
  try {
    const branchIds = req.body?.branchIds;
    const movieId   = req.body?.movieId;
    const startDate = req.body?.startDate || datetimeUtil.getCurrentDate();
    const endDate   = req.body?.endDate || datetimeUtil.getCurrentDate();

    const { rows } = await bookingRepo.listBooking(branchIds, startDate, endDate, movieId);

    res.json(rows);
  } catch (err) {
    res.status(500).send({message: 'server interal error', error: err});
  }
};

export default bookingService;
