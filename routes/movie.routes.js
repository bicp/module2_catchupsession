const express = require('express')
const Movie = require('../models/movie.model')
const Actor = require('../models/actor.model')

const router = express.Router()

router.get('/', async (req, res) => {
  const actors = await Actor.find()
  res.render('movie/create', { actors })
})

router.post('/', async (req, res) => {
  await Movie.create({
    title: req.body.title,
    length: req.body.length,
    actors: req.body.actors,
  })
  res.redirect('/movie')
})

router.get('/all', async (req, res) => {
  const movies = await Movie.find()
  res.render('movie/all', { movies })
})

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id).populate('actors')
  res.render('movie/one', { movie })
})

module.exports = router
