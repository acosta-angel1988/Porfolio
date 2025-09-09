const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, default: 'Dog', immutable: true },
  breed: { type: String, required: true, trim: true },
  sex: { type: String, enum: ['Male', 'Female'], required: true },
  size: { type: String, enum: ['Small', 'Medium', 'Large'], required: true },
  color: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Dog', dogSchema);