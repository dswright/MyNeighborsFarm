const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('farms')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/farms.csv'),
    'farms',
    { columnSeparator: ',', ignoreFirstLine: true }
  ))
  .then((result) => {
    console.log('result', result);
  });
