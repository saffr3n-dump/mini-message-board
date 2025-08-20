import express from 'express';
import indexRouter from './routers/index.js';

const app = express();

app.use('/', indexRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on port ${port}`);
});
