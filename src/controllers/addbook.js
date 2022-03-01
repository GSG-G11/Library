/* eslint-disable camelcase */
const postData = require('../database/queries/postData');

const addbook = (req, res) => {
  console.log('req.body', req.body);
  const { book, date, author_id } = req.body;
  postData(book, date, author_id)
    .then((data) => console.log(data))
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = addbook;
