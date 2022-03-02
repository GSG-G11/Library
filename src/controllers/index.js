const getbook = require('./getbook');
const addbook = require('./addbook');
const { error404, error500 } = require('./error');

module.exports = {
  getbook,
  addbook,
  error404,
  error500,
};
