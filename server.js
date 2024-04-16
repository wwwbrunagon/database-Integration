const express = require('express');
const dotenv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
