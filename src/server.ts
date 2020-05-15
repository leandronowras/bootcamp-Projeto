import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json()); // adicinar esse middleware na frente de todos os outros
app.use(routes);

app.listen(3333, () => {
    console.log('server started at port 3333');
});
