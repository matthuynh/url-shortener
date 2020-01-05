const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortID = require('shortid');
const config = require('config');
const url_schema = require('../models/url');
const urlChecker = require('../utils/inputSanitization');

/**
 * @route       POST /api/url/shorten
 * @description Given a long URL, create short URL
 */
router.post('/shorten', async(req, res) => {
  let  longUrl = req.body.longURL;
  const useCustomShortURL = req.body.useCustomShortURL;
  const baseUrl = config.get('baseUrl');
  const usePreview = req.body.usePreview;
  console.log(req.body);

  // Prepend http if the longUrl doesnt have http, https, or ftp
  const pattern = /^((http|https|ftp):\/\/)/;
  if(!pattern.test(longUrl)) {
    longUrl = "http://" + longUrl;
  }

  // Verify that the base URL is valid
  if (!validUrl.isUri(baseUrl)) {
    return res.status(500).json({
      errorCode: 1000,
      errorMessage: 'Invalid base url'
    });
  }
 
  // User wishes to use a custom short URL
  let urlHash, urlHashExists;
  if (useCustomShortURL) {
    urlHash = req.body.customShortURL;
    
    // Check if custom short URL is of the correct format
    if (!urlChecker.validateShortURLHash(urlHash)) {
      return res.status(400).json({
        errorCode: 1001,
        errorMessage: 'Custom short URL is in an invalid format'
      })
    }
    // The custom short URL already exists
    else if (await url_schema.findOne({ urlHash })) {
      return res.status(400).json({
        errorCode: 1002,
        errorMessage: 'Custom short URL already exists'
      });
    }
  } 
  else {
    // Generate the URL hash
    do {
      urlHash = shortID.generate();
      urlHashExists = await url_schema.findOne({ urlHash });
    } while(urlHashExists);
  }

  // Verify that the long URL is valid
  if (urlChecker.validateLongURL(longUrl)) {
    console.log("The long URL is valid");
    try {
      let url = await url_schema.findOne({ 
        longUrl: longUrl,
        useCustomHash: false
      });
      
      // The long URL already exists in Mongo, and the user DOESN'T input a custom short URL. Return the short URL
      if (url && !useCustomShortURL) {
        console.log("The long URL exists in Mongo");
        if(usePreview){
          url.shortUrl = url.shortUrl.slice(0, baseUrl.length + 1) + 'preview/' + url.shortUrl.slice(baseUrl.length + 1);
        }
        console.log(url);
        res.json(url);
      }
      // The long URL does not exist yet in Mongo, or the user has chosen to input a custom short URL
      else {
        console.log("The long URL does not exist in Mongo yet");
        const shortUrl = baseUrl + '/' + urlHash;


        // Insert the generated URL into Mongo
        url = new url_schema({
          urlHash,
          longUrl,
          shortUrl,
          useCustomHash: useCustomShortURL,
          date: new Date()
        });
        await url.save();
        if(usePreview){
          url.shortUrl = url.shortUrl.slice(0, baseUrl.length + 1) + 'preview/' + url.shortUrl.slice(baseUrl.length + 1);
        }
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        errorCode: 1003,
        errorMessage: 'Server error. Likely something wrong with Mongo'
      });
    }
  } 
  // The long URL is not valid
  else {
    console.log("The long URL is not valid");
    return res.status(401).json({
      errorCode: 1004,
      errorMessage: 'Invalid long URL format'
    });
  }
});

module.exports = router;