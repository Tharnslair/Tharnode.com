// Require statements up here
var express = require('express');
	stylus = require('stylus');
	logger = require('morgan');     

// setting environment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// instance of express app
var app = express();

// use stylus
function compile(str, path) {
	return stylus(str).set('filename', path);
}

// app configuration
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
// express logging
app.use(('dev'));
// adding stylus middleware
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));

// express static
app.use(express.static(__dirname + '/public'));

// routes 
app.get('*', function(req, res) { // match all routes
	res.render('index');
});



// server logging sort of kinda...
var port = 1974;
app.listen(1974);   
console.log('Server is running on port ' + port + ' ...what a great year that was!!!...');

//link(href="/favicon.ico", rel="shortcut icon", type="image/x-icon")