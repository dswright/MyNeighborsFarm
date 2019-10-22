const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('categories')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/categories.csv'),
    'categories',
    { columnSeparator: ',', ignoreFirstLine: true, rowSeparator: '\r' }
  ))
  .then((result) => {
    console.log('result', result);
  });
