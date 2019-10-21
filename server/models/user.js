const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const Farm = require('./farm');

const connectedBookshelf = bookshelf(knex);

const User = connectedBookshelf.model('User', {
  tableName: 'users',
  farms() {
    return this.belongsToMany(Farm, 'user_farms', 'farmId', 'userId');
  }
});

module.exports = User;
