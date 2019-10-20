exports.up = (knex) => knex.schema.table('users', (table) => {
  table.boolean('farmView');
});

exports.down = (knex) => knex.schema.table('users', (table) => {
  table.dropColumn('farmView');
});
