1. `npm init` is gonna initialize a nodejs project and create a `package.json` file
2. `npm i express` for installing express server
3. basic setup for an express server:

```javascript
const express = require('express')

const app = express()

app.get('/', (req, res) => {
res.send('hello world')
})

app.listen(3000)
```

4. you can use `dotenv` package to have environment variable in a `.env` file
5. to create a model you need a model file, then you create a schema inside of the file, the your create a model from the schema and finally export the schema:

```javascript
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  age: Number,
})

module.exports = mongoose.model('User', userSchema)
```
6. you can now use the model in the file of you choice
7. connect to mongoDB using mongoose:
```javascript
const mongoose = require('mongoose')
mongoose.connect(/* here goes the url of the database*/)
```