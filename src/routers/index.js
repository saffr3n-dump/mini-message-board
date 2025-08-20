import { Router } from 'express';
import { home, createGet } from '../controllers/index.js';

const indexRouter = Router();

indexRouter.get('/', home);
indexRouter.get('/new', createGet);

export default indexRouter;
