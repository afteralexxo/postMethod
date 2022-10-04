const express = require('express')
const mysql = require('mysql')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

app.listen(10)

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alexunder'
})

let info = { firstname: '', title: '' }

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
let insrt = [[info.firstname, info.lastname, info.email, info.password]]
console.log();

app.post('/user/signup', (req, res) => {
    info.firstname = req.body.firstname
    info.lastname = req.body.lastname
    info.email = req.body.email
    info.password = req.body.password
    let insrtData = [[info.firstname, info.lastname, info.email, info.password]]

    con.connect(err => {
        if (err) throw err
        console.log('db connection checked');
        con.query('SELECT firstname FROM alexuser', (err, result) => {
            if (err) throw err
            console.log( ' selected result  ', result);
            const sql = 'INSERT INTO alexuser(firstname, lastname, email, password) VALUES ?'
            con.query(sql, [insrtData], (err) => {
                if (err) throw err
                console.log('inserted');
            })

            //     result.forEach(el => {
            //         if (true) {
            //             console.log(el , ' ', result);
            //         }
            //         else {
            // const sql = 'INSERT INTO alexuser(firstname, lastname, email, password) VALUES ?'
            // con.query(sql, [insrtData], (err, result) => {
            //     if (err) throw err
            //     console.log('successfully inserted to table alexunder');
            //             })
            //         }
            //     });

        })
        return res.redirect('/signup')
    }
    )
})
