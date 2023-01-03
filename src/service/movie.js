import { DISPLAY_STATUS } from '../constant/display-status';
import { movieRepo } from '../repository'
import { objectUtil } from '../util';

const movieService = {};

const buildListMovieResult = (movieRows) => {
  let i = 0;
  return movieRows.reduce((_result, record) => {
    const displayStatus = record.displayStatus;
    if (i < 1) console.log('before omit', record);
    objectUtil.omitFields(record, ["descriptionEn", "descriptionTh"]);
    if (i < 1) console.log('after omit:', record);
    i += 1;
    if (displayStatus == DISPLAY_STATUS.SHOWING) {
      _result['nowShowing'].push(record);
    } else if (displayStatus == DISPLAY_STATUS.COMING_SOON) {
      _result['comingSoon'].push(record);
    }
  
    return _result;
  }, {nowShowing: [], comingSoon: []});
};

movieService.listMovie = async (req, res, next) => {
  try {
    const { rows } = await movieRepo.listMovie();
    const result = buildListMovieResult(rows);

    res.json(result);
  } catch (err) {
    res.status(500).send({message: 'server interal error', error: err});
  }
};

movieService.addMovie = async (req, res, next) => {
  try {
    const movies = req.body || [];
    const addMoviePromises = movies.map((movie) => movieRepo.addMovie(movie));

    await Promise.all(addMoviePromises);
    res.status(200).send({message: 'successfully add movie(s)'});
  } catch (err) {
    res.status(500).send({message: 'server interal error', error: err});
  }
}

export default movieService;
