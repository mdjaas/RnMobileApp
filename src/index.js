import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import MainApp from './navigation';
import Reactotron from './config';
import reducers from './redux/reducers/index';
import rootSaga from './redux/sagas';

//Reactotron Configuration
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = applyMiddleware(sagaMiddleware);
const enhancer = compose(middleware, Reactotron.createEnhancer());

export const store = createStore(reducers, enhancer);
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
