const express = require('express');
const connect_db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const config = require('config');

// Connect to database
connect_db();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Define Express middleware routes
app.use('/', require('./routes/index'));
app.use('/preview', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = config.get('port');
app.listen(PORT, function() {
  console.log(`Node server listening on port ${PORT}!`);
});