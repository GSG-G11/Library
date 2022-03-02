const homePage = require('./homePage');
const getbook = require('./getbook');
const addbook = require('./addbook');
const { error404, error500 } = require('./error');

module.exports = {
  homePage,
  getbook,
  addbook,
  error404,
  error500,
};
