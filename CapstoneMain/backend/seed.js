require("dotenv").config();
const mongoose = require("mongoose");
const Dog = require("./models/Dog");
const Cat = require("./models/Cat");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedData = async () => {
  await Dog.deleteMany();
  await Cat.deleteMany();

  const dogs = [
    {
      name: "Buddy",
      breed: "Golden Retriever",
      sex: "Male",
      size: "Large",
      color: "Golden",
      location: "New York",
      image: "https://placedog.net/400/400?id=1"
    },
    {
      name: "Charlie",
      breed: "Beagle",
      sex: "Male",
      size: "Medium",
      color: "Brown/White",
      location: "Chicago",
      image: "https://placedog.net/400/400?id=2"
    },
    {
      name: "Bella",
      breed: "Labrador",
      sex: "Female",
      size: "Large",
      color: "Black",
      location: "San Francisco",
      image: "https://placedog.net/400/400?id=3"
    }
  ];

  const cats = [
    {
      name: "Mittens",
      breed: "Tabby",
      sex: "Female",
      size: "Small",
      color: "Brown",
      location: "San Francisco",
      image: "https://placekitten.com/400/400"
    },
    {
      name: "Luna",
      breed: "Siamese",
      sex: "Female",
      size: "Small",
      color: "Cream",
      location: "New York",
      image: "https://placekitten.com/401/401"
    },
    {
      name: "Shadow",
      breed: "Black Shorthair",
      sex: "Male",
      size: "Medium",
      color: "Black",
      location: "Los Angeles",
      image: "https://placekitten.com/402/402"
    }
  ];

  await Dog.insertMany(dogs);
  await Cat.insertMany(cats);

  console.log("✅ Dogs and Cats added to database");
  process.exit();
};

connectDB().then(seedData);