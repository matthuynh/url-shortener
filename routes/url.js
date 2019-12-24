// Stores POST route to create URL and insert into database
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortID = require('shortid');
const config = require('config');

const url_schema = require('../models/url');

// POST to /api/url/shorten/
/**
 * 
 */
router.post('/shorten', async(req, res) => {
  console.log(req.body);
  const { longUrl } = await req.body; // syntax ???
  const baseUrl = config.get('baseUrl');
  
  // Verify that the base URL is valid
  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json('Invalid base url');
  }
 
  // Generate the URL hash
  // TODO: Check to see if this URL hash already exists
  const urlHash = shortID.generate();
  
  // Verify that the long URL is valid
  if (validUrl.isUri(longUrl)) {
    console.log("The long URL is valid");
    try {
      let url = await url_schema.findOne({ longUrl });

      // The long URL already exists. Return the short URL
      if (url) {
        console.log("The long URL exists in Mongo");
        res.json(url);
      } 
      // The long URL does not exist yet. Generate the short url.
      else {
        console.log("The long URL does not exist in Mongo yet");
        const shortUrl = baseUrl + '/' + urlHash;

        // Insert the generated URL into Mongo
        url = new url_schema({
          urlHash,
          longUrl,
          shortUrl,
          date: new Date()
        });
        await url.save();
        console.log("Saved to mongo");
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } 
  // The long URL is not valid
  else {
    res.statusMessage(401).json('Invalid long URL');
  }
  
  // TODO: Allow the user to generate their own short URL
});

module.exports = router;