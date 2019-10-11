exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('firstName', 255).notNullable();
  table.string('lastName', 255).notNullable();
  table
    .string('emailAddress', 255)
    .unique()
    .notNullable();
  table.string('passwordHash', 255).notNullable();
});

exports.down = (knex) => knex.schema.dropTable('users');
