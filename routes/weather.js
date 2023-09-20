const express = require('express');
const router = express.Router();
const weatherRequest = require('../request/weatherRequest');

/* GET weather in Angelhill. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await weatherRequest.axiosRequest(req.body));
  } catch (err) {
    console.error(`Error while checking weather`, err.message);
    next(err);
  }
});

module.exports = router;
