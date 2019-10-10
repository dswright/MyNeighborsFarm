const User = require('../models/user');
const authentication = require('./authentication');

module.exports = async (req, res, next) => {
  console.log('req.headers', req.headers);
  // Helper method to clear a token and invoke the next middleware
  function clearTokenAndNext() {
    res.clearCookie('token');
    next();
  }
  if (
    req.originalUrl.indexOf('/static/') > -1
    || req.originalUrl.indexOf('favicon') > -1
  ) {
    // don't authenticate /static/ assets
    return clearTokenAndNext();
  }

  const { headers, cookies } = req;
  const { authToken } = cookies;

  if (!authToken) {
    return clearTokenAndNext();
  }

  const authorized = authentication.verifyJwt(authToken, {
    audience: headers.host
  });
  if (!authorized) {
    return clearTokenAndNext();
  }

  const maxAge = 60 * 60 * 24 * 30;

  const { sub, iat } = authorized;
  if (iat + maxAge <= Date.now() / 1000) {
    return clearTokenAndNext();
  }

  try {
    const validatedUser = await User.where({ id: sub }).fetch();
    if (!validatedUser) {
      return clearTokenAndNext();
    }
    req.userId = sub;
    return next();
  } catch (error) {
    return next();
  }
};
