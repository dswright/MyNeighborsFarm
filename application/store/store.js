import { compose, createStore } from 'redux';
import reducers from './all-reducers';

export default (initialState) => {
  let composeEnhancers;
  if (
    typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    /* eslint-disable-line */
    composeEnhancers =      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ /* eslint-disable-line */
  } else {
    composeEnhancers = compose;
  }

  // const finalCreateStore = composeEnhancers(
  //   persistState(persistStateKeys, persistStateConfig),
  //   applyMiddleware(thunkMiddleware),
  // )(createStore);

  // return finalCreateStore(reducers, props);

  const composedCreateStore = composeEnhancers()(createStore);

  return composedCreateStore(reducers, initialState);
};
