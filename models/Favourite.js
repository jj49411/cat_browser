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
  dateAdded: {
    type: Date,
    default: null
  }
})

const Favourite = mongoose.model('favourite', Favourite)
module.exports = Favourite