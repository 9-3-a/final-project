let mongoose = require('mongoose');

let WineSchema = new mongoose.Schema({
  name: String,
  type: Number,
  image: String
});

module.exports = mongoose.model('Wine', WineSchema);