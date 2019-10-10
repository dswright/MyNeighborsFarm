const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const apiRouter = require('./api-router');
const authenticateMiddleware = require('./services/authenticate-middleware');

const csrfProtection = csrf({ cookie: true });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/', csrfProtection, authenticateMiddleware);
app.use('/api', apiRouter);

module.exports = app;
