MyNeighborsFarm

A platform to buy and sell food online locally.

## Installation:

yarn install

create a postgres database. Update your local bash profile to set the values of
four pg database variables - PGDATABASE, PGUSER, PGPASSWORD, PGHOST

run migrations: knex migrate:latest

## Run Project:

yarn run start:dev

## Build Architecture

Utilizes React Universal Component to achieve server side rendering along with a client-side application.

The core server application is server/server.js.

This imported to both start-dev.js, and start-prod.js, which are wrappers for the server in different environments.

start-dev allows for server side rendering and hot module reloading locally.

start-prod is configured for deploying to Heroku.
build-prod runs the server and client webpack processes to compile the files on Heroku deploy.
Heroku automatically runs 'build' and 'start' scripts, so no Procfile is necessary.

The core web application is in /application, which is shared by the client entry and the server entry points. The server and client each wrap the app with the appropriate router.

## Server Architecture

Database is Postgresql.
ORM is knex. Knexfile in the root defines databases by environment. Knex migrations are used to create the database.
Data Model is Bookworm, which utilizes knex under the hood.
Input validations done by Node Input Validator
