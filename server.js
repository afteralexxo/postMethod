
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})

module.exports = new  mongoose.model('users', schema)



// const mysql = require('mysql')

// const xamppConnection = {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'alexunder'
// }


    // const con = mysql.createConnection(xamppConnection)


// con.connect(function (err) {
//     if (err) throw err
//     console.log('connect successfully');
// });

// let arr = []

// module.exports = (firstname, lastname, email, password) => {
//     con.query('SELECT * FROM alexuser', (err, result) => {
//         if (err) throw err
//         result.forEach(coll => {
//             arr.push(coll.firstname)
//         })
//         if (arr.includes(firstname)) {
//             console.log('user existed');
//         }
//         else {
//             let sql = 'INSERT INTO alexuser(firstname, lastname, email, password) VALUES ?'
//             con.query(sql, [[[firstname, lastname, email, password]]], (err, result) => {
//                 if (err) throw err
//                 console.log('inserted');
//             })
//         }
//     });
// }
