import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Home Page');
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started on port ${port}`);
});
