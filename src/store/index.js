import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/rootReducer';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSagas'

const sagaMonitor = process.env.NODE_ENV  === 'development'
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
  ) : applyMiddleware(sagaMiddleware);


const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store;


// compose server para um meger em varias configurações
// No caso quero
