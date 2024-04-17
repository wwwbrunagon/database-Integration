require('dotenv').config({ path: '/config/config.env' });
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const uri = 'mongodb+srv://wwwbrunagon:1234@traversymedia.9hwx4cx.mongodb.net/devcamper';

console.log('URI: ', process.env.MONGO_URI);

// const uri = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose.connect(uri);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
