const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const User = require('./user');

const connectedBookshelf = bookshelf(knex);

const Farm = connectedBookshelf.model('Farm', {
  tableName: 'farms',
  users() {
    return this.belongsToMany(User, 'users_farms', 'userId', 'farmId');
  }
});

module.exports = Farm;
