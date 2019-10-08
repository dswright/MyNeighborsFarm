const bcrypt = require('bcrypt');

const saltRounds = 10;

const createPasswordHash = (plainPassword) => bcrypt.hash(plainPassword, saltRounds);

const validatePassword = (plainPassword, savedHash) => bcrypt.compare(plainPassword, savedHash);

module.exports = {
  createPasswordHash,
  validatePassword
};
