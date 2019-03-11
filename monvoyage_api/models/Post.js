const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const Post = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bodyText: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

});

mongoose.model('posts', Post);
