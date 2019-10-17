const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex) => knex('users')
  .del()
  .then(() => seedFile(
    knex,
    path.resolve('./server/db/seeds/data/users.csv'),
    'users',
    {
      columnSeparator: ',',
      ignoreFirstLine: true
    }
  ))
  .then((result) => {
    console.log('result', result);
  });
