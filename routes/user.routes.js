const express = require('express')
const User = require('../models/user.model')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('createUser')
})

router.post('/', async (req, res) => {
  await User.create({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
  })
  res.render('createUser')
})

router.get('/login', (req, res) => {
  res.send('this is login route')
})

module.exports = router
