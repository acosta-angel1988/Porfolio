const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const coffeeRoutes = require("./routes/coffeeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/coffee", coffeeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));