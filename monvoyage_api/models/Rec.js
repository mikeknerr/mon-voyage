const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const Rec = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  comment: {
    type: String,

  },
  date: {
    type: Date,
    default: Date.now
  },

});

mongoose.model('recs', Rec);
