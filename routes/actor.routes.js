const express = require('express')
const Actor = require('../models/actor.model')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('actor/create')
})

router.post('/', async (req, res) => {
  await Actor.create({
    name: req.body.name,
  })
  res.render('actor/create')
})

module.exports = router
