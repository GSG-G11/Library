const getbook = require('./getbook');
const getAuthors = require('./getAuthors');
const addbook = require('./addbook');
const { error404, error500 } = require('./error');

module.exports = {
  getbook,
  getAuthors,
  addbook,
  error404,
  error500,

};
