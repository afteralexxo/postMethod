const mysql = require('mysql')

const xamppConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alexunder'
}

const con = mysql.createConnection(xamppConnection)

con.connect(function (err) {
    if (err) throw err
    console.log('connect successfully');
});

module.exports = (firstname, lastname, email, password) => {

    let sql = 'INSERT INTO alexuser(firstname, lastname, email, password) VALUES ?'
    con.query(sql, [[[firstname, lastname, email, password]]], (err, result) => {
        if (err) throw err
        console.log('successfully inserted');
    });

}

