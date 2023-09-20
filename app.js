const express = require('express');
const app = express();
// const authorization = require('./middleware/authorization');
const authentication = require('./middleware/authentication');
const port = process.env.PORT || 3000;
const boardGamesRouter = require('./routes/boardGames');
const weatherRouter = require('./routes/weather');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/board-games', authentication, boardGamesRouter);
app.use('/weather', weatherRouter);
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
