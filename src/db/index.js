import dotenv from 'dotenv';
import { Pool } from 'pg';
import { dbUtil } from '../util';

dotenv.config()

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

// return result, rowCount, error
const doQuery = async (queryString, queryValues = []) => {
    const executedResult = await pool.query(queryString, queryValues);
    return { rows: dbUtil.keyCamelizer(executedResult?.rows), rowCount: executedResult?.rowCount };
};

export default {
    query: doQuery,
};
