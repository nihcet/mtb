import db from '../db';
import { dbUtil } from '../util';

export const listSeat = async (theatreIds = []) => {
    const theatreIdsString = dbUtil.createQuertParamStringFromList(theatreIds);
    let queryString = `
        SELECT
            branches.name_th as branch_name,
            theatres.name as theatre_name,
            seats.*
        FROM seats
        RIGHT JOIN theatres
            ON seats.theatre_id = theatres.id
        RIGHT JOIN branches
            ON seats.branch_id = branches.id and
            theatres.branch_id = branches.id
    `;

    if (theatreIds.length > 0) {
        queryString += ` WHERE theatre_id IN (${theatreIdsString})`;
    }

    queryString += `ORDER BY seats.branch_id, seats.theatre_id, seats.row, seats.col;`;
    return db.query(queryString);
};

export const addSeat = async (seatEntity) => {
    const seatEntityValues = [
        seatEntity.id,
        seatEntity.branchId,
        seatEntity.theatreId,
        seatEntity.row,
        seatEntity.col,
    ];

    return db.query(
        `INSERT INTO seats (id, branch_id, theatre_id, row, col) values ($1, $2, $3, $4, $5);`,
        seatEntityValues,
    );
};
