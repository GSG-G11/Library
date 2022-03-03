/* eslint-disable camelcase */
const postData = require('../database/queries/postData');

const addbook = (req, res) => {
  const { book, date, author_id } = req.body;
  postData(book, date, author_id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = addbook;
