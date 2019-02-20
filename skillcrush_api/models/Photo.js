const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const Photo = new Schema({
  url: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

mongoose.model('photos', Photo);
