require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');

const dogRoutes = require('./routes/dogs');
const catRoutes = require('./routes/cats');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/dogs', dogRoutes);
app.use('/api/cats', catRoutes);

app.get('/', (req, res) => res.send('🐾 Pet adoption backend is running!'));

if (process.env.NODE_ENV !== 'test') {
  connectDB(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  });
}

module.exports = app; // Needed for Supertest