// Match longURLs with a valid TLD
async function validateURL(longURL) {
  // Note: this regex is NOT comprehensive and is meant as a basic sanity check
  let regex = /(www\.)?.+\.[a-z]+/;
  return regex.test(longURL)
};

module.exports.validateURL