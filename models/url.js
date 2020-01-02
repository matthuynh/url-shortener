const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlHash: String,
    longUrl: String,
    shortUrl: String,
    useCustomHash: Boolean,
    date: { type: String, default: Date.now }
});

module.exports = mongoose.model('url_schema', urlSchema);