const knex = require('../../db/knex-connect');

const createUser = (params) => {
  console.log('params', params);

  return knex('users')
    .insert(params)
    .then((response) => ({
      success: true
    }));
};

createUser();

module.exports = createUser;
