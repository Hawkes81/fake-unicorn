require('dotenv').config();

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for testing in this case! */
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: process.env.DB_TIMEOUT
    },
    listPerPage: process.env.DB_PAGELIMIT,
};

module.exports = config;
