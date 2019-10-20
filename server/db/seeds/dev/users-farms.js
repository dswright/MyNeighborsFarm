const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('users_farms')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/users-farms.csv'),
    'users_farms',
    { columnSeparator: ',', ignoreFirstLine: true }
  ))
  .then((result) => {
    console.log('result', result);
  });
