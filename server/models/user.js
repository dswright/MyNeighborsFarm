const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');

const connectedBookshelf = bookshelf(knex);

const User = connectedBookshelf.model('User', {
  tableName: 'users'
});

module.exports = User;
