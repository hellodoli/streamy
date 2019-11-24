import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import history from './history';

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
