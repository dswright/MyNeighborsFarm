exports.up = (knex) => knex.schema.table('farms', (table) => {
  table.dropColumn('userId');
});

exports.down = (knex) => knex.schema.table('farms', (table) => {
  table.boolean('userId');
});
