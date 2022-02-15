const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  age: Number,
})

module.exports = mongoose.model('User', userSchema)