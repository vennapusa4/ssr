import React from "react";
import renderToString from "react-dom/server";
import Home from "./client/components/Home";
import { Provider } from 'react-redux';
export  default (req,store)=>{
    return `
 <html>
 <head>
 <title>Page Title</title>
 </head>
 <body>
 <div id="root">aaa
 <script src="bundle.js"></script>
 </div>
 </body>
 </html>`;
}
