const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  roastLevel: { type: String, enum: ["Light", "Medium", "Dark"], required: true },
  origin: { type: String, required: true },
  type: { type: String, enum: ["Decaf", "Espresso", "Blends"], required: true }
}, { timestamps: true });

module.exports = mongoose.model("Coffee", CoffeeSchema);