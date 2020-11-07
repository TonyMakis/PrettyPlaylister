/* Redux Setup */
import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/spotifyFetchSagas';

import rootReducer from '../reducers/rootReducer';

/* Redux Store Config */
const sagaMiddleware = createSagaMiddleware();
// Logger is for viewing actions and reducers; uncomment if needed
const middlewares = [sagaMiddleware/*, logger*/];

// Redux store connections & config
export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
