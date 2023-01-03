import db from '../db';

export const listTheatre = async () => {
    return db.query(
        `SELECT theatres.*,
            branches.name_en as branch_name
        FROM theatres
        RIGHT JOIN branches ON theatres.branch_id = branches.id
        ;`
    );
};

export const addTheatre = async (theatreEntity) => {
    const theatreEntityValues = [
        theatreEntity.id,
        theatreEntity.branchId,
        theatreEntity.name,
    ];

    return db.query(
        `INSERT INTO theatres (id, branch_id, name) values ($1, $2, $3);`,
        theatreEntityValues,
    );
};
