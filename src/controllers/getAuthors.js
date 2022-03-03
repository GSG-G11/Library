const allAuthors = require('../database/queries/allAuthors');

const getAuthors = (req, res) => {
  allAuthors()
    .then((data) => {
      res.json(data.rows);
    });
};
module.exports = getAuthors;
