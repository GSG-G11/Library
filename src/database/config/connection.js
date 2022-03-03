require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = "";
if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.DB_URL_test;
// } else if (!dbUrl) {
//   throw new Error("No Database URL!!!"); 
}
else if (process.env.NODE_ENV==='production'){
  dbUrl = process.env.DATABASE_URL; 
}
else {
  dbUrl = process.env.DB_URL;
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
});

module.exports = connection;
