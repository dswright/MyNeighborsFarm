exports.up = (knex) => knex.schema.table('farm_products', (table) => {
  table.integer('productVariationId').unsigned();
});

exports.down = (knex) => knex.schema.table('farm_products', (table) => {
  table.dropColumn('productVariationId');
});
