const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'john'
  },
  username: String,
  password: String,
  age: Number,
})

module.exports = mongoose.model('User', userSchema)