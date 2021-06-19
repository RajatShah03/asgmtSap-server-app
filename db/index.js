const mongoose = require('mongoose');

const connectDB = (config) => {
  const DB_URI = config.get('MONGO_DB_URI');
  mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('Connected to mongoDB'))
    .catch(() => console.error('MongoDB_ERR: Failed to connect to mongoDB'));
};

const disconnectDB = () => {
  mongoose.connection
    .close()
    .then(() => console.log('Disconnected from mongoDB'))
    .catch(() => console.error('MongoDB_ERR: Failed to disconnect from mongoDB'));
};

module.exports = {
  connectDB,
  disconnectDB,
};