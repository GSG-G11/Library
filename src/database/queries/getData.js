const connection = require('../config/connection');

const getbooks = () =>{
    const sql = {
        text : `SELECT * from books ;` ,
    }
    return connection.query(sql)
};
module.exports = getbooks;