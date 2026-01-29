const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Cat = require("../models/Cat");
const catRoutes = require("../routes/catRoutes");

const app = express();
app.use(express.json());
app.use("/api/cats", catRoutes);

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/petdb_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Cat.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Cat API", () => {
  it("should add a new cat", async () => {
    const newCat = {
      name: "TestCat",
      breed: "Siamese",
      sex: "Female",
      size: "Small",
      color: "Cream",
      location: "Test City",
      image: "https://placekitten.com/400/400"
    };

    const res = await request(app).post("/api/cats").send(newCat);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("TestCat");
  });

  it("should get all cats", async () => {
    const res = await request(app).get("/api/cats");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
