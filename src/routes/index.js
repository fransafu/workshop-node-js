import express from 'express';

import users from './users';
import posts from './posts';
import comments from './comments';

const routes = express.Router();

routes.use('/users', users);
routes.use('/posts', posts);
routes.use('/comments', comments);

export default routes;
