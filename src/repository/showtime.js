import db from '../db';

export const listShowtime = async (movieId, displayStatus) => {
    return db.query(
        `SELECT showtimes.*,
            branches.name_en as branch_name,
            theatres.name as theatre_name,
            movies.image_url
        FROM showtimes
        RIGHT JOIN branches ON showtimes.branch_id = branches.id
        RIGHT JOIN theatres ON showtimes.theatre_id = theatres.id
        RIGHT JOIN movies ON showtimes.movie_id = movies.id
        WHERE showtimes.date >= CURRENT_DATE::text
            and movies.id = '${movieId}'
            and movies.display_status = '${displayStatus}'
        ;`,
    );
};

export const addShowtime = async (showtimeEntity) => {
    const showtimeEntityValues = [
        showtimeEntity.id,
        showtimeEntity.branchId,
        showtimeEntity.theatreId,
        showtimeEntity.movieId,
        showtimeEntity.date,
        showtimeEntity.time,
    ];

    return db.query(
        `INSERT INTO showtimes (
            id, branch_id, theatre_id, movie_id,
            date, time
        ) values (
            $1, $2, $3, $4,
            $5, $6
        );`,
        showtimeEntityValues,
    );
};
