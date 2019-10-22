const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('products')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/products.csv'),
    'products',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      rowSeparator: '\r',
      mapTo: ['name', null, 'categoryId', 'id']
    }
  ))
  .then((result) => {
    console.log('result', result);
  });
