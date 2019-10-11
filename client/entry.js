import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../application';
import store from '../application/store/store';

const render = (App) => hydrate(
  // hydrate seeks to align client app with the already-rendered server app.
  <App />,
  document.getElementById('root')
);

const preloadedState = window.__PRELOADED_STATE__;

const theApp = () => (
  <Provider store={store(preloadedState)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../application/', () => {
    const theApp = require('../application/').default; // eslint-ignore-line
    render(theApp);
  });
}

render(theApp);
