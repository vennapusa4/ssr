const express  =require('express');
const render =require('./render').default;
const app = express();
import { matchRoutes } from 'react-router-config';
import createStore from "./client/helpers/createStore";
import Routes from "./Routes";
import 'babel-polyfill';
app.use(express.static('public'));
import proxy from "express-http-proxy";
import axios from 'axios';
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
//server no cokkie because we are making same domians
app.get('*', (req, res) => {
  const store=createStore(req);
    //res.send(render(req,createStore()));
    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    Promise.all(promises).then(() => {
      const context = {};
      const content = render(req, store, context);
       res.send(content);
    });
   // render(req,store);
});
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
