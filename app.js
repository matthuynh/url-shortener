const express = require('express');
const connect_db = require('./config/db');
const app = express();

// Connect to database
connect_db();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/about', function(req, res) {
  res.send('yeetcode');
});

app.use(express.json({ extented: false }));

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});