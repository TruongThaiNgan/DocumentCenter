import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers/index';
import rootSaga from './services/index';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
