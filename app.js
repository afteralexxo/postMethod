const express = require('express')
const mysql = require('mysql')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

app.listen(10)

let info = { title: '' }

app.get('/', (req, res) => {

    info.title = 'Home'
    res.render('home', info)
})

app.get('/signup', (req, res) => {
    info.title = 'signup'
    res.render('signup', info)
})

app.get('/about', (req, res) => {
    info.title = 'about'
    res.render('about', info)
})

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alexunder'
})

con.connect(function (err) {
    if (err) throw err
    console.log('connect successfully');
});


function insertData(firstname, lastname, email, password) {

    let sql = 'INSERT INTO alexuser(firstname, lastname, email, password) VALUES ?'
    con.query(sql, [[[firstname, lastname, email, password]]], (err, result) => {
        if (err) throw err
        console.log('successfully inserted');
    });

}


app.post('/user/signup', (req, res) => {
    info.firstname = req.body.firstname
    info.lastname = req.body.lastname
    info.email = req.body.email
    info.password = req.body.password

    insertData(req.body.firstname, req.body.lastname, req.body.email, req.body.password)

    return res.redirect('/signup')

})
