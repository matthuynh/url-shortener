// Redirects short URLs to long URLs

import App from "../RedirectPages/errorpage";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

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
			return res.redirect(url.longUrl);
		}
		else {
			// console.log(url);
			// return res.status(404).json('No url found');
			const theHtml = `
				<html>
				<head><title>Shrinkly Error</title></head>
				<body>
				<h1>Error 404</h1>
				<div id="reactele">{{{reactele}}}</div>
				<script src="/app.js" charset="utf-8"></script>
				<script src="/vendor.js" charset="utf-8"></script>
				</body>
				</html>
				`;
			const hbsTemplate = hbs.compile(theHtml);
			const reactComp = renderToString(<App error={true}/>);
			const htmlToSend = hbsTemplate({ reactele: reactComp });
			res.send(htmlToSend);
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
	
	let errorBool;
	let short;
	let message;
	try {
		const url = await url_schema.findOne({ urlHash: req.params.hash });
		if (url) {
			errorBool = false;
			short = url.longUrl;
			message = "Preview";
		} else {
			// // console.log(url);
			// return res.redirect(config.get("baseUrl"));
			// // return res.status(404).json('No url found');
			errorBool = true;
			short = "";
			message = "Shrinkly Error";
		}
		const theHtml = `
		<html>
		<head><title>Shrinkly Server!</title></head>
		<body>
		<h1>${message}</h1>
		<div id="reactele">{{{reactele}}}</div>
		<script src="/app.js" charset="utf-8"></script>
		<script src="/vendor.js" charset="utf-8"></script>
		</body>
		</html>
		`;
		const hbsTemplate = hbs.compile(theHtml);
		const reactComp = renderToString(<App error={errorBool} shortUrl={short}/>);
		const htmlToSend = hbsTemplate({ reactele: reactComp });
		res.send(htmlToSend);

	} catch (err) {
		console.error(err);
		res.status(500).json("Server error");
	}
	
});

module.exports = router;
