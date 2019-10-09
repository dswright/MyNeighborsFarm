const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  // Default to no user logged in
  req.session = null;
  req.user = null;
  // Helper method to clear a token and invoke the next middleware
  function clearTokenAndNext() {
    res.clearCookie('token');
    next();
  }
  // Read the cookie named 'token' and bail out if it doesn't exist
  const { token } = req.cookies;
  if (!token) {
    return clearTokenAndNext();
  }
  // Test the validity of the token
  const tokenSecret = process.env.AUTHPRIVATEKEY;
  jwt.verify(token, tokenSecret, (err, decodedToken) => {
    if (err) {
      return clearTokenAndNext();
    }
    // Compare the token expiry (in seconds) to the current time (in milliseconds)
    // Bail out if the token has expired
    if (decodedToken.exp <= Date.now() / 1000) {
      return clearTokenAndNext();
    }
    // Read the session ID from the decoded token
    // and attempt to fetch the session by ID
    // Note: getSession retrieves the session (e.g. from Redis, Database, etc).
    const { sub } = decodedToken;
    User.get(sub)
      .then(() => {
        req.userId = sub;
        next();
      })
      .catch(() => {
        clearTokenAndNext();
      });
  });
};
