import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import history from './history';

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
console.log('store: ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
