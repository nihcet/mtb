import db from '../db';

export const listMovie = async () => db.query('SELECT * FROM movies;');

export const addMovie = async (movieEntity) => {
    const movieEntityValues = [
        movieEntity.id,
        movieEntity.nameTh,
        movieEntity.nameEn,
        movieEntity.type,
        movieEntity.descriptionEn,
        movieEntity.descriptionTh,
        movieEntity.duration,
        movieEntity.imageUrl,
        movieEntity.displayStatus,
    ];

    return db.query(
        `INSERT INTO movies (
            id, name_th, name_en, type,
            description_en, description_th, duration, image_url, display_status
        ) values (
            $1, $2, $3, $4,
            $5, $6, $7, $8, $9
        );`,
        movieEntityValues,
    );
};
