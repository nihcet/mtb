import db from '../db';

export const cleanTables = async () => {
    return db.query(
        `DROP TABLE IF EXISTS bookings;
        DROP TABLE IF EXISTS showtimes;
        DROP TABLE IF EXISTS movies;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS seats;
        DROP TABLE IF EXISTS theatres;
        DROP TABLE IF EXISTS branches;`,
    );
};

export const createTables = async () => {
    return db.query(
        `create table branches (
            id		text primary key not null,
            name_en text not null,
            name_th text not null
        );
        
        create table theatres (
            id			text primary key not null,
            branch_id	text not null references branches (id),
            name		text not null
        );
        
        create table seats (
            id			text primary key not null,
            branch_id	text not null references branches (id),
            theatre_id	text not null references theatres (id),
            row			text not null,
            col			text not null
        );
        
        create table users (
            id		text primary key not null,
            name	text not null
        );
        
        create table movies (
            id      			text primary key not null,
            name_en 			text not null,
            name_th 			text not null,
            description_en 		text,
            description_th 		text,
            type 				text not null,
            duration			int not null,
            image_url			text,
            display_status		text not null
        );
        
        create table showtimes (
            id text primary key not null,
            branch_id	text not null references branches (id),
            theatre_id	text not null references theatres (id),
            movie_id	text not null references movies (id),
            date text not null,
            time text not null,
            unique (branch_id, theatre_id, date, time, movie_id)
        );
        
        create table bookings (
            id			text primary key not null,
            user_id 	text not null references users (id),
            branch_id	text not null references branches (id),
            theatre_id	text not null references theatres (id),
            showtime_id text not null references showtimes (id),
            seat_id		text not null references seats (id),
            unique (user_id, branch_id, theatre_id, showtime_id, seat_id)
        );`,
    );
};
