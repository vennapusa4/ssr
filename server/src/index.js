const express  =require('express');
const render =require('./render').default;
const app = express();
import createStore from "./client/helpers/createStore";
//import 'babel-polyfill';
app.use(express.static('public'));
app.get('*', (req, res) => {
    res.send(render(req,createStore()));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
