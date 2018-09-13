import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import playlistReducer from 'Modules/playlist';

const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require(`redux-logger`);

//   middlewares.push(logger);
// }

const rootReducer = combineReducers({ playlist: playlistReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
