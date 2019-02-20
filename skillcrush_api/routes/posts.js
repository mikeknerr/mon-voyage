const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const homeURL = 'http://localhost:3000';

// Load Posts model
require('../models/Post');
const Post = mongoose.model('posts')

// Get all posts
router.get('/', (req, res) => {
  Post.find()
    .sort({date:'desc'})
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.send(err);
    })
});

// Add new blog post
router.post('/', (req, res) => {
  Post.create(req.body)
    .then(post => {
        console.log("Success!")
      //  res.status(201).json(newPost);
        res.redirect(homeURL);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
})

// Edit route
router.get('/edit/:id', (req, res) => {
  Post.findOne({
    _id: req.params.id
  })
  .then(post => {
    console.log(post);
    res.json(post);
  })

});

//Update Post
router.put('/:id', (req, res) => {
  Post.findOne({
    _id: req.params.id
  })
  .then(post => {
    post.title = req.body.title;
    post.location = req.body.location;
    post.content = req.body.content;

    post.save()
    .then(post => {
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



module.exports = router;
