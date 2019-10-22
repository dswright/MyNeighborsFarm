const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const apiRouter = require('./api-router');
const authenticateMiddleware = require('./services/authenticate-middleware');

const csrfProtection = csrf({ cookie: true });

const app = express();

// ignore favicon requests
app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }
  return next();
});

app.use(express.json());
app.use(cookieParser());
app.use('/', csrfProtection, authenticateMiddleware);
app.use('/api', apiRouter);

module.exports = app;
