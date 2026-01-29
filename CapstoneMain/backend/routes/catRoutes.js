const express = require("express");
const Cat = require("../models/Cat");
const router = express.Router();

// GET all cats
router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single cat by ID
router.get("/:id", async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.json(cat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new cat
router.post("/", async (req, res) => {
  try {
    const newCat = new Cat(req.body);
    await newCat.save();
    res.status(201).json(newCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Update cat by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedCat = await Cat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // returns updated doc & validates schema
    );

    if (!updatedCat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.json(updatedCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove cat by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id);

    if (!deletedCat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.json({ message: "Cat deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;