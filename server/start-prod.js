require('colors');
const express = require('express');
const clientConfigProd = require('../webpack/client.prod');
const clientStats = require('../buildClient/stats.json');
const serverRender = require('../buildServer/main.js').default;

const { publicPath } = clientConfigProd.output;
const outputPath = clientConfigProd.output.path;
const app = express();

app.use(publicPath, express.static(outputPath));
app.use(serverRender({ clientStats }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
