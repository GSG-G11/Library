require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = "";
if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.TEST_DB_URL;
} else if (!dbUrl) {
  throw new Error("No Database URL!!!"); }
else {
  dbUrl = process.env.DB_URL;
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: false,
});

module.exports = connection;
