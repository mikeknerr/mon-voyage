const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const homeURL = 'http://localhost:3000';

// Load Photos model
require('../models/Photo');
const Photo = mongoose.model('photos')

// Get all photos
router.get('/', (req, res) => {
  Photo.find()
    .sort({date:'desc'})
    .then(photos => {
      res.json(photos);
    })
    .catch(err => {
      res.send(err);
    })
});

// Upload photo
router.post('/', (req, res) => {
  console.log("about to post!")
  Photo.create(req.body)
    .then(newPhoto => {
      console.log("should be redirecting")
      res.redirect(homeURL);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
})




module.exports = router;
