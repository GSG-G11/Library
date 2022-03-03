const connection = require('../config/connection');

const allAuthors = () => {
  const sql = {
    text: 'select * from authors',
  };
  return connection.query(sql);
};

module.exports = allAuthors;
