import { Router } from 'express';
import { home, createGet, createPost } from '../controllers/index.js';

const indexRouter = Router();

indexRouter.get('/', home);
indexRouter.get('/new', createGet);
indexRouter.post('/new', createPost);

export default indexRouter;
