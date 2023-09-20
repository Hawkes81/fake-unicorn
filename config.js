const config = {
    db: {
      /* don't expose password or any sensitive info, done only for testing in this case! */
      host: 'db4free.net',
      user: 'hawkes81',
      password: 'realunicorn81',
      database: 'fake_unicorn_db',
      connectTimeout: 60000
    },
    listPerPage: 10,
  };

  module.exports = config;
