const express = require('express')
const router = express.Router()
const Favourite = require('../../models/Favourite')

router.get('/', (req, res) => {
  Favourite.find()
    .then(favourites => res.json(favourites))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {

  const newCat = new Favourite({
    name: req.body.name,
    url: req.body.url
  })

  newCat.save()
    .then(() => res.status(200).json('New cat added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.delete('/', (req, res) => {
  Favourite.deleteOne({
    name: req.body.name
  },
    (err, cat) => {
      if (err) {
        return res.send(err)
      }
      res.json('Cat deleted')
    }
  )
})

module.exports = router