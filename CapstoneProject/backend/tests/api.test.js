const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();
const app = require('../server'); // Import Express app

describe('Pet API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI_TEST || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('GET /api/dogs returns an array', async () => {
    const res = await request(app).get('/api/dogs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/dogs adds a new dog', async () => {
    const newDog = {
      name: 'Test Dog',
      breed: 'Test Breed',
      sex: 'Male',
      size: 'Medium',
      color: 'Brown',
      location: 'Test City',
      phone: '123-456-7890',
      email: 'testdog@example.com',
      image: 'https://placedog.net/400/400?id=999'
    };
    const res = await request(app).post('/api/dogs').send(newDog);
    expect(res.statusCode).toBe(201);
    expect(res.body.dog.name).toBe('Test Dog');
  });
});