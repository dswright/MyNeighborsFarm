const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('../webpack/client.dev');
const serverConfig = require('../webpack/server.dev');
const app = require('./app');

const { publicPath } = clientConfig.output;

let isBuilt = false;

const done = () => {
  if (isBuilt) return;
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    isBuilt = true;
    console.log(`Dev build done. Listening on port: ${port}`);
  });
};

const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const options = { publicPath, stats: { colors: true } };
const devMiddleware = webpackDevMiddleware(compiler, options);

app.use(devMiddleware);
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

devMiddleware.waitUntilValid(done);
