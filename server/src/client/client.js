import React from "react";
import ReactDOM from "react-dom";
import  { BrowserRouter as Router } from 'react-router-dom';
import Routes from "../Routes";
ReactDOM.render(
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
    ,document.querySelector('#root')
  );
  