const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = (knex, Promise) => {
  console.log('running seed..');
  return knex('categories')
    .del()
    .then(() => seedFile(
      knex,
      path.resolve('./server/db/seeds/data/categories.csv'),
      'categories',
      { columnSeparator: ',' }
    ))
    .then((val) => {
      console.log('val', val);
    });
};
