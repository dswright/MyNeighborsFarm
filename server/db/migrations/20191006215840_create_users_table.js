exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('first_name', 255).notNullable();
  table.string('last_name', 255).notNullable();
  table.string('email_address', 255).notNullable();
  table.string('password_hash', 255).notNullable();
});

exports.down = (knex) => knex.schema.dropTable('users');
