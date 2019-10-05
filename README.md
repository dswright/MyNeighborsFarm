MyNeighborsFarm

A platform to buy and sell food online locally.

## Installation:

yarn install

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
