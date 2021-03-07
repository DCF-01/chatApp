const mysql = require('mysql2/promise');
const util = require('util');
const { formatEmailQuery } = require('../utils/query');
const {Email, handleEmail} = require('../controllers/mail');

async function handleTranscript(req, res, next) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'radant098',
        database: 'chatApp'
    });
    
    const username = req.query.username;

    let sql = 'SELECT Users.id, Users.username, Messages.message FROM Users INNER JOIN Messages ON Users.username=' + mysql.escape(username) +';';


    connection.execute(sql)
        .then(([rows, fields]) => {
            console.log(rows);
            req.query.text = formatEmailQuery(rows);
            handleEmail(req.query);
        })
        .catch(err => console.log(err))
        .then( () => {
            res.status(200).send('Transcript sent!')
        })

}

module.exports = {
    handleTranscript
}