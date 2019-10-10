import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../application';
import store from '../application/store/store';
import createStoreState from './services/create-store-state';

// this file is called directly from start-prod.js in prod.
// it is indirectly called from start-dev.js in dev.
export default ({ clientStats }) => async (req, res) => {
  const initialState = await createStoreState({ userId: req.userId });
  const context = {};
  const app = ReactDOM.renderToString(
    <Provider store={store(initialState)}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    // if a <Redirect is rendered by the application, detect and redirect from the server.
    res.status(301).redirect(context.url);
  }

  const chunkNames = flushChunkNames();

  const {
    js, styles, scripts, stylesheets
  } = flushChunks(clientStats, {
    chunkNames
  });

  const csrfToken = req.csrfToken();

  console.log('PATH', req.path); // eslint-ignore-line
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames); // eslint-ignore-line
  console.log('SCRIPTS SERVED', scripts); // eslint-ignore-line
  console.log('STYLESHEETS SERVED', stylesheets); // eslint-ignore-line

  res.send(
    `<!doctype html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
          <meta charset="utf-8">
          <meta name="csrf-token" content="${csrfToken}">
          <title>MyNeighborsFarm - Buy & Sell Small Farm Products Locally</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          ${styles}
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(
    /</g,
    '\\u003c'
  )}
        </script>
        ${js}
      </html>`
  );
};
