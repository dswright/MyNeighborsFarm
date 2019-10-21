exports.up = (knex) => knex.schema.createTable('user_farms', (table) => {
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

exports.down = (knex) => knex.schema.dropTable('user_farms');
