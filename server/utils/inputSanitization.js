// Use regex to match longURLs with a valid TLD
function validateLongURL(longURL) {
  // Note: this regex is NOT comprehensive and is meant as a basic sanity check
  let regex = /(http:\/\/|https:\/\/){0,1}(www\.)?.+\.[a-z]+/;
  return regex.test(longURL);
};

// Check to see if a user's custom short URL is valid
function validateShortURLHash(shortURL) {
  let regex = /[0-9a-zA-Z-_]+/
  return (shortURL.length >= 4 && shortURL.length <= 20 && regex.test(shortURL))
}

module.exports = {
  validateLongURL,
  validateShortURLHash
}