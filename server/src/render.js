import React from "react";
import { renderToString } from 'react-dom/server';
import Home from "./client/pages/Home";
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { StaticRouter } from 'react-router-dom';
import Routes from './Routes';



export  default (req,store,context)=>{
    const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      );
    return `
 <html>
 <head>
 <title>Page Title</title>
 </head>
 <body>
 <div id="root">${content}
 <script>
 window.INITIAL_STATE=${JSON.stringify(store.getState())}
 console.log(window.INITIAL_STATE)
 </script>
  <script src="bundle.js"></script>

 </div>
 </body>
 </html>`;
}
