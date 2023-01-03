import { showtimeRepo } from '../repository'

const showtimeService = {};

showtimeService.listShowtime = async (req, res, next) => {
  try {
    const theatreIds = req.body?.theatreIds;
    const movieId   = req.body?.movieId;

    const { rows } = await showtimeRepo.listShowtime(theatreIds, movieId);

    res.json(rows);
  } catch (err) {
    res.status(500).send({message: 'server interal error', error: err});
  }
};

export default showtimeService;
