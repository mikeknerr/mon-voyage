const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const homeURL = 'http://localhost:3000';

// Load Recs model
require('../models/Rec');
const Rec = mongoose.model('recs')

// Get all recs
router.get('/', (req, res) => {
  Rec.find()
    .sort({date:'desc'})
    .then(recs => {
      res.json(recs);
    })
    .catch(err => {
      res.send(err);
    })
});

// Add new rec
router.post('/', (req, res) => {
  Rec.create(req.body)
  .then(rec => {
      console.log("Success!")
      res.redirect(homeURL);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
})


//Update Post
router.put('/:id', (req, res) => {
  Rec.findOne({
    _id: req.params.id
  })
  .then(rec => {
    rec.title = req.body.title;
    rec.location = req.body.location;
    rec.content = req.body.content;

    rec.save()
    .then(rec => {
        console.log("Success!")
      //  res.status(201).json(newPost);
        res.redirect(homeURL);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
  })

});

//need edit and delete


module.exports = router;
