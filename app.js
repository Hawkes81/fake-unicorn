const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const boardGamesRouter = require('./routes/boardGames');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/board-games', boardGamesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
