const mongoose = require('mongoose');
require("dotenv").config()
const db = process.env.mongodburi; // connection string

// Connect to database
const connect_db = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Mongo connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connect_db;