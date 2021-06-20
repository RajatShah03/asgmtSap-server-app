const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Configs
const config = require('config');

const app = express();

app.use(cors());

app.use(express.json());

// DB connection
const { connectDB } = require('./db');
connectDB(config);

// Routers
const users = require('./routes/api/users');

app.use('/api/users', users);

app.get('/', (req, res) => {
  res.send('Welcome to assignment server app for adding users');
});

const PORT = process.env.PORT || config.get('PORT');

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});