import React from "react";
import ReactDOM from "react-dom";
import  { BrowserRouter as Router } from 'react-router-dom';
import Routes from "../Routes";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import axios from 'axios';
import reducers from './reducers';
import 'babel-polyfill';
const axiosInstance = axios.create({
  baseURL: '/api',
});
//which means when u make rew it will apeend api 
//ex /users means /api/users
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
console.log("hi");
console.log(window.INITIAL_STATE);
ReactDOM.hydrate(
      <Provider store={store}>
      <Router>
        {renderRoutes(Routes)}
      </Router>
      </Provider>
    ,document.querySelector('#root')
  );
  