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
const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);
ReactDOM.render(
      <Provider store={store}>
      <Router>
        {renderRoutes(Routes)}
      </Router>
      </Provider>
    ,document.querySelector('#root')
  );
  