const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('farm_products')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/farm-products.csv'),
    'farm_products',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      rowSeparator: '\r'
    }
  ))
  .then((result) => {
    console.log('result', result);
  });
