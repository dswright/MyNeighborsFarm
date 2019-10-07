const express = require('express');
const apis = require('./apis');

const app = express();

app.use(express.json());
app.use('/apis', apis);

module.exports = app;
