import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../application/components/App2';
import store from '../application/store/store';

const render = (App) => hydrate(
  // hydrate seeks to align client app with the already-rendered server app.
  <App />,
  document.getElementById('root')
);

const theApp = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../application/components/App2.js', () => {
    const theApp = require('../application/components/App2').default; // eslint-ignore-line
    render(theApp);
  });
}

render(theApp);
