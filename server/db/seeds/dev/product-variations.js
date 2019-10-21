const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('product_variations')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/product-variations.csv'),
    'product_variations',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      rowSeparator: '\r',
      mapTo: [null, 'productId', 'name', 'id']
    }
  ))
  .then((result) => {
    console.log('result', result);
  });
