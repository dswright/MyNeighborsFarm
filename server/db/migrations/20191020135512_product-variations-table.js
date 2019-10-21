exports.up = (knex) => knex.schema.createTable('product_variations', (table) => {
  table.increments('id');
  table
    .integer('productId')
    .unsigned()
    .notNullable();
  table.string('name');
});

exports.down = (knex) => knex.schema.dropTable('product_variations');
