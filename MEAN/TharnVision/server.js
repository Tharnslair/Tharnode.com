// Require statements up here
var express = require('express');

// setting environment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// instance of express app
var app = express();

// app configuration
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');


// routes 
app.get('*', function(req, res) { // match all routes
	res.render('index');
});

// server logging sort of kinda...
var port = 1974;
app.listen(1974);   
console.log('Server is running on port ' + port + ' ...what a great year that was!!!...');

//link(href="/favicon.ico", rel="shortcut icon", type="image/x-icon")