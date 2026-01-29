const express = require("express");
const Dog = require("../models/Dog");
const router = express.Router();

// GET all dogs
router.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single dog by ID
router.get("/:id", async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);

    if (!dog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.json(dog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new dog
router.post("/", async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    await newDog.save();
    res.status(201).json(newDog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// PUT - Update a dog by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return updated doc & run schema validation
    );

    if (!updatedDog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.json(updatedDog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove a dog by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndDelete(req.params.id);

    if (!deletedDog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.json({ message: "Dog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;