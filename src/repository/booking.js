import db from '../db';
import { dbUtil } from '../util';

export const listBooking = (branchIds = [], startDate, endDate, movieId = null) => {
    const branchIdsString = dbUtil.createQuertParamStringFromList(branchIds);
    let queryString = `SELECT * FROM bookings
        WHERE ${startDate} <= date and date <= ${endDate}`;

    if (branchIds.length > 0) {
        queryString += ` and branch_id in (${branchIdsString})`
    }

    if (movieId != null && movieId != undefined) {
        queryString += ` and movie_id = ${movieId}`
    }

    queryString += `ORDER BY bookings.showtime, bookings.branch_id, bookings.theatre_id, bookings.seat_id;`
    return db.query(queryString);
};

export const addBooking = async (bookingEntity) => {
    const bookingEntityValues = [
        bookingEntity.id,
        bookingEntity.userId,
        bookingEntity.branchId,
        bookingEntity.theatreId,
        bookingEntity.showtimeId,
        bookingEntity.seatId,
    ];

    return db.query(
        `INSERT INTO bookings (
            id, user_id, branch_id, theatre_id,
            showtime_id, seat_id
        ) values (
            $1, $2, $3, $4,
            $5, $6
        );`,
        bookingEntityValues,
    );
};
