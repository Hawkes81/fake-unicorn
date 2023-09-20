const db = require('./db');
const helper = require('../helper');
const config = require('../config');

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, bgg_rank FROM board_games LIMIT ${offset},${config.listPerPage}`
  );
  
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

const create =  async (boardGame) => {
  const result = await db.query(
    `INSERT INTO board_games 
    (name, released_year, bgg_rank) 
    VALUES 
    ('${boardGame.name}', ${boardGame.released_year}, ${boardGame.bgg_rank})`
  );

  let message = 'Error when creating board game';

  if (result.affectedRows) {
    message = 'Board game created successfully';
  }

  return {message};
}

const update = async (id, boardGame) => {
  const result = await db.query(
    `UPDATE board_games
    SET name="${boardGame.name}", released_year=${boardGame.released_year}, bgg_rank=${boardGame.bgg_rank} 
    WHERE id=${id}` 
  );

  let message = 'Error when updating board game';

  if (result.affectedRows) {
    message = 'Board game updated successfully';
  }

  return {message};
}

const remove = async (id) => {
  const result = await db.query(
    `DELETE FROM board_games
    WHERE id="${id}"`
  );

  let message = 'Error when deleting board game';

  if (result.affectedRows) {
    message = 'Board game deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
