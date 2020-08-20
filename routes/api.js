const express = require('express');
const Favorites = require('../models/favorites');
const router = express.Router();

// get a list of favorites from the database
router.get('/favorites', function(req, res) {
   Favorites.find({}).then(function(favorites) {
       res.send(favorites);
   })
   .catch((err) => {
    console.log(err);
});
});

// add a new favorite to the database
router.post('/favorites', function(req, res) {
    Favorites.create(req.body)
    .then(function(favorite) {
        res.send(favorite);
    })
    .catch((err) => {
        console.log(err);
    });
});

// delete a favorite from the database
router.delete('/favorites/:id', function(req, res) {
    Favorites.findByIdAndRemove({_id: req.params.id}).then(function(favorite) {
        res.send(favorite)
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;