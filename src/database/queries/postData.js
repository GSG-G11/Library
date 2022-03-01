const connection = require('../config/connection');

const postData = (name, date, id) => connection.query({
  text: 'INSERT INTO books (name, release_date, author_id) VALUES ($1, $2, $3);',
  values: [name, date, id],
});

module.exports = postData;
