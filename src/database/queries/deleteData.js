const connection = require('../config/connection');

const deleteData = (id) => connection.query('delete from books where id = $1', [id]);

module.exports = deleteData;