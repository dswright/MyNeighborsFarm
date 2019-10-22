exports.up = (knex) => knex.schema.createTable('farm_products', (table) => {
  table.increments('id');
  table
    .integer('farmId')
    .unsigned()
    .notNullable();
  table
    .integer('productId')
    .unsigned()
    .notNullable();
  table.integer('productVariationId').unsigned();
  table.string('name');
  table.text('description');
});

exports.down = (knex) => knex.schema.dropTable('farm_products');
