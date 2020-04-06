const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

const uri = require('./config/keys').mongoURI

const favouritesRouter = require('./routes/api/favourites')

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.use(bodyParse.json())
app.use('/favourites', favouritesRouter)

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})