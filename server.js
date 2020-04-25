const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const uri = require('./config/keys').mongoURI

const favouritesRouter = require('./routes/api/favourites')

app.use(cors())

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.use(bodyParse.json())
app.use('/favourites', favouritesRouter)

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
  app.get("/favourites", (req, res) => {
  })
}



app.listen(port, () => {
  console.log(`Server is up on port: ${port}`)
})