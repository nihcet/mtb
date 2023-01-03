import { seatRepo } from '../repository'

const seatService = {};

const buildSeatResult = (seatRows = []) => {
  const groupedSeat = {};
  for (let seatRow of seatRows) {
    const { branchId, theatreId } = seatRow;
    if (!(branchId in groupedSeat)) {
      groupedSeat[branchId] = {};
    }

    if (!(theatreId in groupedSeat[branchId])) {
      groupedSeat[branchId][theatreId] = [];
    }

    seatRow["seatName"] = `${seatRow["row"]}${seatRow["col"]}`;
    delete seatRow["row"];
    delete seatRow["col"];
    groupedSeat[branchId][theatreId].push(seatRow);
  }

  for (let [branchId, theatresInBranch] of Object.entries(groupedSeat)) {
    groupedSeat[branchId] = Object.entries(theatresInBranch).map(
      ([theatreId, seatsInTheatre]) => {
        const theatreName = seatsInTheatre[0]["theatreName"];
        const branchName = seatsInTheatre[0]["branchName"];
        delete seatsInTheatre[0]["theatreName"];
        delete seatsInTheatre[0]["branchName"];
        return {theatreId: theatreId, theatreName: theatreName, branchName: branchName, seats: seatsInTheatre};
      },
    );
  }

  return Object.entries(groupedSeat).map(
    ([branchId, theatresInBranch]) => {
      const branchName = theatresInBranch[0]["branchName"];
      delete theatresInBranch[0]["branchName"];
      return {branchId: branchId, branchName: branchName, theatres: theatresInBranch};
    },
  );
};

seatService.listSeat = async (req, res, next) => {
  try {
    const theatreIds = req.body?.theatreIds;
    const movieId   = req.body?.movieId;
    const { rows } = await seatRepo.listSeat(theatreIds, movieId);

    const result = buildSeatResult(rows);
    res.json(result);
  } catch (err) {
    res.status(500).send({message: 'server interal error', error: err});
  }
};

export default seatService;
