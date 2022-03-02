require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = "";
if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.DB_URL_test;
// } else if (!dbUrl) {
//   throw new Error("No Database URL!!!"); 
}
if else (process.env.NODE_ENV==='production'){
  dbUrl = process.env.DB_PRODUCTION; 
}
else {
  dbUrl = process.env.DB_URL;
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
});

module.exports = connection;
