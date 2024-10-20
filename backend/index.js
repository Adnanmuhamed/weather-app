const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


connectDB();


app.get('/', (req, res) => res.send('Weather Summary App'));

const PORT = 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));