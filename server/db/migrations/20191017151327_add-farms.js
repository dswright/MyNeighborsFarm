exports.up = (knex) => knex.schema.createTable('farms', (table) => {
  table.increments('id');
  table.string('name', 255).notNullable();
  table.text('description');
  table.string('facebookPage');
  table.string('youtubeChannel');
  table.string('website');
  table.string('emailAddress');
  table.string('phoneNumber');
});

exports.down = (knex) => knex.schema.dropTable('farms');
