const express = require('express');
const cookieParser = require('cookie-parser');
const apiRouter = require('./api-router');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);

module.exports = app;
