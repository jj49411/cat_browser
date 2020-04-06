const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Favourite = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now()
  }
})

const Favourites = mongoose.model('favourite', Favourite)
module.exports = Favourites