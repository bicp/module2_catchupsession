const mongoose = require('mongoose')

const actorSchema = mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Actor', actorSchema)