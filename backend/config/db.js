const mongoose = require('mongoose');
const dotenv = require('dotenv');

const MONGO_URI="mongodb+srv://mohdadnan150:6JCyfOsflSRs2dU3@cluster0.skle9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;