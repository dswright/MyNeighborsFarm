const knex = require('knex');
const knexSettings = require('../../knexfile')[process.env.NODE_ENV];

module.exports = knex(knexSettings);
