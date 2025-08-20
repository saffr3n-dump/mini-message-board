import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (_req, res) => {
  res.send('Home Page');
});

export default indexRouter;
