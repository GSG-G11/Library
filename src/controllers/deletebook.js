const deleteData = require('../database/queries/deleteData');

const deletebook = (req, res) => {
    const bookId = req.params.id;
    deleteData(bookId);
    res.redirect('/');
  };

  module.exports = deletebook;