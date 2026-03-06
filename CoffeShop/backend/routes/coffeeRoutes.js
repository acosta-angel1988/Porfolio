const express = require("express");
const router = express.Router();
const Coffee = require("../models/Coffee");

// =======================
// GET all coffees
// =======================
router.get("/", async (req, res) => {
  try {
    // ✅ Uncomment below to use MongoDB
    const coffees = await Coffee.find();

    // ⚠️ Temporary test data (uncomment to debug frontend)
    /*
    const coffees = [
      {
        name: "Test Coffee",
        price: 10.99,
        roastLevel: "Light",
        origin: "Colombia",
        type: "Decaf"
      },
      {
        name: "Mock Espresso",
        price: 12.5,
        roastLevel: "Medium",
        origin: "Brazil",
        type: "Espresso"
      }
    ];
    */

    console.log("Fetched coffees:", coffees); // debug
    res.json(coffees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// =======================
// GET single coffee by ID
// =======================
router.get("/:id", async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) return res.status(404).json({ message: "Coffee not found" });
    res.json(coffee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// =======================
// CREATE new coffee
// =======================
router.post("/", async (req, res) => {
  try {
    const coffee = new Coffee(req.body);
    const savedCoffee = await coffee.save();
    res.status(201).json(savedCoffee);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// =======================
// UPDATE coffee by ID
// =======================
router.put("/:id", async (req, res) => {
  try {
    const updatedCoffee = await Coffee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCoffee) return res.status(404).json({ message: "Coffee not found" });
    res.json(updatedCoffee);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// =======================
// DELETE coffee by ID
// =======================
router.delete("/:id", async (req, res) => {
  try {
    const deletedCoffee = await Coffee.findByIdAndDelete(req.params.id);
    if (!deletedCoffee) return res.status(404).json({ message: "Coffee not found" });
    res.json({ message: "Coffee deleted" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;