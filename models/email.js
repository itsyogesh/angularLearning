//Load required packages
var mongoose = require('mongoose');

var EmailSchema = new mongoose.Schema({
  from: String,
  to: String,
  subject: String,
  body: String
});

//Export the mongoose model
module.exports = mongoose.model('Email', EmailSchema);
