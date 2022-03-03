const getData = require('../database/queries/getData');

const getbook = (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    });
};

module.exports = getbook;
