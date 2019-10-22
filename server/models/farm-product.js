const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const Farm = require('./farm');
const Product = require('./product');

const connectedBookshelf = bookshelf(knex);

const FarmProduct = connectedBookshelf.model('FarmProduct', {
  tableName: 'farm_products',
  farm() {
    return this.belongsTo(Farm);
  },
  product() {
    return this.belongsTo(Product);
  }
});

module.exports = FarmProduct;
