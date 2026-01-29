require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const dogRoutes = require("./routes/dogRoutes");
const catRoutes = require("./routes/catRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/dogs", dogRoutes);
app.use("/api/cats", catRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));