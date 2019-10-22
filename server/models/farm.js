const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const User = require('./user');
const FarmProduct = require('./farm-product');

const connectedBookshelf = bookshelf(knex);

const Farm = connectedBookshelf.model('Farm', {
  tableName: 'farms',
  users() {
    return this.belongsToMany(User, 'user_farms', 'userId', 'farmId');
  },
  farmProducts() {
    return this.hasMany(FarmProduct, 'farmId');
  }
});

module.exports = Farm;
