const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // connection string

// Connect to database
const connect_db = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Mongo connected');
  } catch (err) {
    console.err(err.message);
    process.exit(1);
  }
};

module.exports = connect_db;