const webpack = require('webpack');
const clientConfigProd = require('../webpack/client.prod');
const serverConfigProd = require('../webpack/server.prod');

webpack([clientConfigProd, serverConfigProd]).run(() => {
  console.log('prod build complete!');
});
