const express = require('express')
const router = express.Router()
const Favourite = require('../../models/Favourite')

router.get('/', (req, res) => {
  Favourite.find()
    .then(favourites => res.json(favourites))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router