require('colors');
const express = require('express');
const clientConfigProd = require('../webpack/client.prod');
const clientStats = require('../buildClient/stats.json'); // built in prod webpack version
const serverRender = require('../buildServer/main.js').default;
const app = require('./server');

const { publicPath } = clientConfigProd.output;
const outputPath = clientConfigProd.output.path;

app.use(publicPath, express.static(outputPath));
app.use(serverRender({ clientStats }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
