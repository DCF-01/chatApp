const mysql = require('mysql2/promise');

async function addRecord(message){
    let saveEnabled = process.env.save == 'true' ? true : false;

    if(saveEnabled){
        let sql = 'INSERT INTO Messages (userID, message) VALUES (1, ' + mysql.escape(message) + ');';
        
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.password,
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
        
}

module.exports = {
    addRecord
}