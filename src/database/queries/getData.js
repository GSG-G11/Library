const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT books.id , books.name as book, authors.name as author, books.release_date as date from books join authors on(books.author_id = authors.id);',
  };
  return connection.query(sql);
};
module.exports = getData;
