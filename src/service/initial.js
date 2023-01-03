import {
    bookingRepo,
    branchRepo,
    movieRepo,
    seatRepo,
    showtimeRepo,
    theatreRepo,
    userRepo,
    utilRepo,
} from '../repository'
import {
    bookings,
    branches,
    movies,
    seats,
    showtimes,
    theatres,
    users,
} from '../constant/initial/data'

const initialService = {};

initialService.initialDatabase = async (req, res, next) => {
    try {
        console.log('try to clean all tables');
        await utilRepo.cleanTables();
        await utilRepo.createTables();

        console.log('try to add branch.');
        const addBranchPromises = branches.map((branch) => branchRepo.addBranch(branch));
        await Promise.all(addBranchPromises);

        console.log('try to add theatre.');
        const addTheatrePromises = theatres.map((theatre) => theatreRepo.addTheatre(theatre));
        await Promise.all(addTheatrePromises);

        console.log('try to add seat.');
        const addSeatPromises = seats.map((seat) => seatRepo.addSeat(seat));
        await Promise.all(addSeatPromises);

        console.log('try to add user.');
        const addUserPromises = users.map((user) => userRepo.addUser(user));
        await Promise.all(addUserPromises);

        console.log('try to add movice.');
        const addMoviePromises = movies.map((movice) => movieRepo.addMovie(movice));
        await Promise.all(addMoviePromises);

        console.log('try to add showtime.');
        const addShowtimePromises = showtimes.map((showtime) => showtimeRepo.addShowtime(showtime));
        await Promise.all(addShowtimePromises);

        console.log('try to add booking.');
        const addBookingPromises = bookings.map((booking) => bookingRepo.addBooking(booking));
        await Promise.all(addBookingPromises);

        const message = 'successfully initial database.';
        console.log(message);
        res.status(200).send({message: message});
    } catch (err) {
        console.log(err);
        res.status(500).send({message: 'failed to initial database.', error: err});
    }
};

export default initialService;
