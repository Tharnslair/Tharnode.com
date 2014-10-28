var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(function respond(req, res, next) {
  res.render('hello', {
    visited: new Date(),
    url: req.url
  });
});

app.listen(7777);
console.log('Server started: http://localhost:7777/');