const getData = require('../database/queries/getData');

const getbook = (req, res) => {
  getData()
    .then((data) => {
      console.log(data.rows);
      res.json(data.rows);
    });
};
module.exports = getbook;
