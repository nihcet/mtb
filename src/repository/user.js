import db from '../db';

export const listUser = async () => db.query('SELECT * FROM users;');

export const addUser = async (userEntity) => {
    const userEntityValues = [userEntity.id, userEntity.name];

    return db.query(
        `INSERT INTO users (id, name) values ($1, $2);`,
        userEntityValues,
    );
};
