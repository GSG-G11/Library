const connection = require('../config/connection');

const deleteData = () => {
  const sql = {
    text: 'SELECT books.name as book, authors.name as author, books.release_date as date from books join authors on(books.author_id = authors.id);',
  };
  return connection.query(sql);
};

module.exports = deleteData;
