const express = require('express');
const connect_db = require('./config/db');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();

// Connect to database
connect_db();

// app.use(cors);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(express.json());
app.use(bodyParser.text());

// Define Express middleware routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;
app.listen(PORT, function() {
  console.log(`Node server listening on port ${PORT}!`);
});