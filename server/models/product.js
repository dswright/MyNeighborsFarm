const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const ProductVariation = require('./product-variation');

const connectedBookshelf = bookshelf(knex);

const Product = connectedBookshelf.model('Product', {
  tableName: 'products',
  variations() {
    return this.hasMany(ProductVariation);
  }
});

module.exports = Product;
