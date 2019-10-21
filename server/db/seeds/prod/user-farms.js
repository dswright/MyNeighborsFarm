const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('user_farms')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/user-farms.csv'),
    'user_farms',
    { columnSeparator: ',', ignoreFirstLine: true, rowSeparator: '\r' }
  ))
  .then((result) => {
    console.log('result', result);
  });
