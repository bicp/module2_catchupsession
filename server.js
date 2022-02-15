const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./user.model')
dotenv.config()

mongoose.connect(process.env.DATABASEURL)

const app = express()
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  await User.create({
    username: 'john',
    password: 'whatever',
    age: '30',
  })

  res.send('hello world, here')
})

app.get('/user', (req, res) => {
  res.render('createUser')
})

app.post('/user', async (req, res) => {
  await User.create({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
  })
  res.render('createUser')
})

app.listen(process.env.PORT)
