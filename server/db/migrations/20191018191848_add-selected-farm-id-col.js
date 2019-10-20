exports.up = (knex) => knex.schema.table('users', (table) => {
  table.integer('selectedFarmId');
});

exports.down = (knex) => knex.schema.table('users', (table) => {
  table.dropColumn('selectedFarmId');
});
