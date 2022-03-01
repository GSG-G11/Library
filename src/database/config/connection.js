require('env2')('.env');
const { Pool } = require('pg');

if (!process.env.DB_URL) {
  throw new Error("DB URL doesn't exise");
}

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

module.exports = connection;
