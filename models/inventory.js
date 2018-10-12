let mongoose = require('mongoose');

let InventorySchema = new mongoose.Schema({
  name: String,
  type: Number,
  image: String
});

module.exports = mongoose.model('Inventory', InventorySchema);