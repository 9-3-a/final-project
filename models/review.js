let mongoose = require('mongoose');

let ReviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
  
module.exports = mongoose.model('Review', ReviewSchema);