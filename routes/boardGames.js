const express = require('express');
const router = express.Router();
const boardGames = require('../services/boardGames');

/* GET board games. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await boardGames.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting board games`, err.message);
    next(err);
  }
});

/* POST board game. */
router.post('/', async function(req, res, next) {
    try {
      res.json(await boardGames.create(req.body));
    } catch (err) {
      console.error(`Error while creating board game`, err.message);
      next(err);
    }
});

/* PUT board game. */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await boardGames.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating board game`, err.message);
        next(err);
    }
});

/* DELETE board game. */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await boardGames.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting board game`, err.message);
        next(err);
    }
});

module.exports = router;
