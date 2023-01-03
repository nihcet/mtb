import db from '../db';

export const listBranch = async () => db.query('SELECT * FROM branches;');

export const addBranch = async (branchEntity) => {
    const branchEntityValues = [
        branchEntity.id,
        branchEntity.nameTh,
        branchEntity.nameEn,
    ];

    return db.query(
        `INSERT INTO branches (id, name_th, name_en) values ($1, $2, $3);`,
        branchEntityValues,
    );
};
