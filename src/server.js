import {} from 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use('/', routes);

export default app;
