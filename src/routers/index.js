import { Router } from 'express';
import { home, createGet, createPost, message } from '../controllers/index.js';

const indexRouter = Router();

indexRouter.get('/', home);
indexRouter.get('/new', createGet);
indexRouter.post('/new', createPost);
indexRouter.get('/messages/:id', message);

export default indexRouter;
