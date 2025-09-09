require('dotenv').config();
const connectDB = require('./utils/db');
const Dog = require('./models/dog');
const Cat = require('./models/cat');

const dogs = [/* your dog objects */];
const cats = [/* your cat objects */];

async function seed() {
  await connectDB(process.env.MONGODB_URI);
  await Dog.deleteMany({});
  await Cat.deleteMany({});
  await Dog.insertMany(dogs);
  await Cat.insertMany(cats);
  console.log('✅ Seed data inserted');
  process.exit();
}

seed();