import dotenv from 'dotenv';
import express from 'express';

import RouteHandler from './src/route';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', RouteHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server start at port: ${PORT}`);
});
