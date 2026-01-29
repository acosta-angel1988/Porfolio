const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  sex: String,
  size: String,
  color: String,
  location: String,
  image: String
});

module.exports = mongoose.model("Dog", dogSchema);