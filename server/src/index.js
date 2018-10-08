const express  =require('express');
const React  =require('react');
const renderToString  =require('react-dom/server').renderToString;
const HelloWorld=require('./client/components/Home').default;
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
   const content=renderToString(<HelloWorld/>);
   const html=`
<html>
<head>
<title>Page Title</title>
</head>
<body>
<div id="root">aaa
<script src="bundle.js"></script>
</div>
</body>
</html>`

    res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
