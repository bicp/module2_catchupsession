const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts')
dotenv.config()

mongoose.connect(process.env.DATABASEURL)

const app = express()
app.use(expressLayout)
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  res.send('hello world, here')
})

const userRoutes = require('./routes/user.routes')
app.use('/user', userRoutes)

const movieRoutes = require('./routes/movie.routes')
app.use('/movie', movieRoutes)

const actorRoutes = require('./routes/actor.routes')
app.use('/actor', actorRoutes)

app.listen(process.env.PORT)
