const express = require('express')
const insert = require('./server')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

app.listen(10)

let info = {}

app.get('/', (req, res) => {
    info.title = 'Home'
    res.render('home', info)
})

app.get('/about', (req, res) => {
    info.title = 'about'
    res.render('about', info)
})

app.get('/signup', (req, res) => {
    info.title = 'signup'
    res.render('signup', info)
})

app.post('/user/signup', (req, res) => {
    info.firstname = req.body.firstname
    info.lastname = req.body.lastname
    info.email = req.body.email
    info.password = req.body.password

    insert(req.body.firstname, req.body.lastname, req.body.email, req.body.password)

    return res.redirect('/signup')

})
