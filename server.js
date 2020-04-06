const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

const uri = require('./config/keys').mongoURI

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})