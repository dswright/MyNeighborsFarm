// there is currently no staging environment
// local database environment variables must be set.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'myneighborsfarm_test',
      user: 'test_user',
      password: '',
      host: 'localhost'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations'
    }
  }
};
