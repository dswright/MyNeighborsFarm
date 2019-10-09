const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const createPasswordHash = (plainPassword) => bcrypt.hash(plainPassword, saltRounds);
const validatePassword = (plainPassword, savedHash) => bcrypt.compare(plainPassword, savedHash);

const maxAge = 60 * 60 * 24 * 30;
const createJwt = (payload, options) => {
  const privateKey = process.env.AUTHPRIVATEKEY;
  // Token signing options
  const signOptions = {
    issuer: 'myneighborsfarm',
    audience: options.audience,
    expiresIn: maxAge, // 30 days validity
    algorithm: 'RS256'
  };
  return jwt.sign(payload, privateKey, signOptions);
};

const verifyJwt = (token, options) => {
  const publicKey = process.env.AUTHPUBLICKEY;
  const verifyOptions = {
    issuer: 'myneighborsfarm',
    audience: options.audience,
    expiresIn: maxAge, // 30 days validity
    algorithm: ['RS256']
  };
  try {
    return jwt.verify(token, publicKey, verifyOptions);
  } catch (err) {
    return false;
  }
};

module.exports = {
  createPasswordHash,
  validatePassword,
  createJwt,
  verifyJwt
};
