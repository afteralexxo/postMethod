const express = require('express')
const User = require('./server')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

const static = path.join(__dirname, 'public')
app.use(express.static(static))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))

const info = {}

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
    client = req.body

    try{
        mongoose.connect('mongodb://127.0.0.1:27017/File')
        User.create({ firstname: client.firstname, lastname: client.lastname, email: client.email, password: client.password })
        .then(() => {
            console.log('successfuly inserted ', client.firstname);
        })
        // insert(req.body.firstname, req.body.lastname, req.body.email, req.body.password)
    }catch(e){
        console.log(e.message);
    }
    return res.redirect('/signup')
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Not-Found' })
})
