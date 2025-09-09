const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

router.get('/', async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cats', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Request body is empty' });
    }
    const cat = new Cat(req.body);
    const newCat = await cat.save();
    res.status(201).json({ message: 'Cat added successfully', cat: newCat });
  } catch (err) {
    res.status(400).json({ message: 'Invalid cat data', error: err.message });
  }
});

module.exports = router;