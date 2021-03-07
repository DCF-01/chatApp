const mysql = require('mysql2/promise');

async function addRecord(message){
    let sql = 'INSERT INTO Messages (userID, message) VALUES (1, ' + mysql.escape(message) + ');';

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'radant098',
        database: 'chatApp'
    });

    connection.execute(sql)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

}

module.exports = {
    addRecord
}