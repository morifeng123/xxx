const mysql =require('mysql');
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"feng20010729",
    database:"steam"
});
function query(sql,callback) {
    pool.getConnection(function (err,connection) {
        if (err) throw err;
        connection.query(sql,function (err,results) {
            callback(err,results);
            connection.release();
        })
    })
}
exports.query=query;