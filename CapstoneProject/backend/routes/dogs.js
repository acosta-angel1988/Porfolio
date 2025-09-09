const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching dogs', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Request body is empty' });
    }
    const dog = new Dog(req.body);
    const newDog = await dog.save();
    res.status(201).json({ message: 'Dog added successfully', dog: newDog });
  } catch (err) {
    res.status(400).json({ message: 'Invalid dog data', error: err.message });
  }
});

module.exports = router;