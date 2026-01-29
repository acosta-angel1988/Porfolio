const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Dog = require("../models/Dog");
const dogRoutes = require("../routes/dogRoutes");

// Setup Express app for testing
const app = express();
app.use(express.json());
app.use("/api/dogs", dogRoutes);

beforeAll(async () => {
  // Connect to a test database
  await mongoose.connect("mongodb://127.0.0.1:27017/petdb_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Dog.deleteMany(); // clean test DB
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Dog API", () => {
  it("should add a new dog", async () => {
    const newDog = {
      name: "TestDog",
      breed: "Beagle",
      sex: "Male",
      size: "Medium",
      color: "Brown",
      location: "Test City",
      image: "https://placedog.net/400/400"
    };

    const res = await request(app).post("/api/dogs").send(newDog);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("TestDog");
  });

  it("should get all dogs", async () => {
    const res = await request(app).get("/api/dogs");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
