import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import AppReducer from './reducers';
import { AppNavigator } from './navigators';

const middleware = applyMiddleware(logger, promiseMiddleware());
const store = createStore(AppReducer, middleware);



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}



export default App;