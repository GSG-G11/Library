const allAuthors = require('../database/queries/allAuthors');

const getAuthors = (req, res) => {
    allAuthors()
      .then((data) => {
        // console.log(data.rows);
        res.json(data.rows);
      });
  };
  module.exports = getAuthors;  