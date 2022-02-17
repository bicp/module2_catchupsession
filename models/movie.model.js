const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: String,
  length: Number,
  actors: {
    type: [mongoose.SchemaTypes.ObjectId],
    default: [],
    ref: "Actor",
  }
})

module.exports = mongoose.model('Movie', movieSchema)
