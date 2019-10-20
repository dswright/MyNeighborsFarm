exports.up = (knex) => knex.schema.createTable('users_farms', (table) => {
  table.increments('id');
  table
    .integer('userId')
    .unsigned()
    .notNullable();
  table
    .integer('farmId')
    .unsigned()
    .notNullable();
});

exports.down = (knex) => knex.schema.dropTable('users_farms');
