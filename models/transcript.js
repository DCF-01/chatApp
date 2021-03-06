const mysql = require('mysql');
const { toObjArray } = require('../utils/query');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'radant098',
    database: 'chatApp'
});
connection.connect();


function handleTranscript(req, res, next) {
    
    const username = req.query.username; 

    
    let sql = 'SELECT Users.id, Users.username, Messages.message FROM Users INNER JOIN Messages ON Users.username=' + mysql.escape(username) +';';
    

    try {
        connection.query(sql, (error, result, fields) => {
            if(error){
                throw error;
            }
            else {
                res.send(toObjArray(result));
            }
        })
    }
    catch(err) {
        console.log(err);
    }
};



module.exports = {
    handleTranscript
}