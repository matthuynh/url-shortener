// Redirects short URLs to long URLs
const express = require("express");
const router = express.Router();

const url_schema = require("../models/url");

/**
 * @route         GET /:hash
 * @description   Redirect to the original URL
 */
router.get("/:hash", async (req, res) => {
	try {
		const url = await url_schema.findOne({ urlHash: req.params.hash });
		if (url) {
      return res.redirect(url.longUrl);
		} else {
      console.log(url);
      return res.status(404).json('No url found');
		}
	} catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
