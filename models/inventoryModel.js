var mongoose = require('mongoose');

var carsSchema = new mongoose.Schema({
  image: String,
  year: String,
  make: String,
  model: String,
  color: String,
  price: String
});

module.exports = mongoose.model('Cars', carsSchema);
