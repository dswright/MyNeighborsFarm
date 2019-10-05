require('colors');
const express = require('express');
const webpack = require('webpack');
// const noFavicon = require('express-no-favicons');
const clientConfig = require('../webpack/client.dev');
const clientConfigProd = require('../webpack/client.prod');
const serverConfigProd = require('../webpack/server.prod');

const { publicPath } = clientConfig.output;
const outputPath = clientConfig.output.path;
const app = express();

let isBuilt = false;

const done = () => !isBuilt
  && app.listen(process.env.PORT || 3000, () => {
    isBuilt = true;
    console.log('PROD BUILD COMPLETE');
  });

webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
  const clientStats = stats.toJson().children[0];
  const serverRender = require('../buildServer/main.js').default;

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats }));

  done();
});
