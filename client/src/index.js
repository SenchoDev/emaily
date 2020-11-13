import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}


const store = createStore(reducers, {}, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
