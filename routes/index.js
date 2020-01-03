// Redirects short URLs to long URLs
const express = require("express");
const router = express.Router();
const config = require("config");
const url_schema = require("../models/url");

/**
 * @route         GET /:hash
 * @description   Redirect to the original URL
 */
router.get("/:hash", async (req, res) => {
	try {
		const url = await url_schema.findOne({ urlHash: req.params.hash });
		if (url) {
      if (url.longUrl )
			return res.redirect(url.longUrl);
		} else {
			// console.log(url);
			return res.redirect(config.get("baseUrl"));
			//// return res.status(404).json('No url found');
		}
	} catch (err) {
		console.error(err);
		res.status(500).json("Server error");
	}
});

/**
 * @route         GET preview/:hash
 * @description   Display a preview of the URL to the user before redirecting to the original URL
 */
router.get("/preview/:hash", async (req, res) => {
	// TODO
});

module.exports = router;
