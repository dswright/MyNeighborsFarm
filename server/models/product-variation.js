const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');
const Product = require('./product');

const connectedBookshelf = bookshelf(knex);

const ProductVariation = connectedBookshelf.model('ProductVariation', {
  tableName: 'product-variations'
});

module.exports = ProductVariation;
