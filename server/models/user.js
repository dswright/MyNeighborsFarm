const bookshelf = require('bookshelf');
const knex = require('../db/knex-connect');

const connectedBookshelf = bookshelf(knex);

const User = connectedBookshelf.model('User', {
  tableName: 'users',
  duplicateEmail: async (email) => {
    console.log('this', this);
    const emailCount = await this.where('email', email).count;
    return emailCount;
  }
});

module.exports = User;
