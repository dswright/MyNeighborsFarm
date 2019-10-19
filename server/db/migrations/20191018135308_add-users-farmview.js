exports.up = (knex) => knex.schema.table('users', (table) => {
  table.boolean('farmView');
});

exports.down = (knex) => knex.schema.dropColumn('farmView');
