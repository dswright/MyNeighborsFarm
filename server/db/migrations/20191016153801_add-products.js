exports.up = (knex) => knex.schema.createTable('products', (table) => {
  table.increments('id');
  table.string('name', 255).notNullable();
  table.text('description');
  table
    .integer('categoryId')
    .unsigned()
    .notNullable();
});

exports.down = (knex) => knex.schema.dropTable('categories');
