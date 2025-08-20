import express from 'express';
import path from 'path';
import indexRouter from './routers/index.js';

const app = express();

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on port ${port}`);
});
