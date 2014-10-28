// required files

var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    twitter = require('ntwitter'),
    routes = require('./routes'),
    config = require('./config'),
    streamHandler = require('./utils/streamHandler');

// Express instance

var app = express();
var port = process.env.PORT || 2112;

// handlebars template engine

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable eTag headers...yeah...that's it

app.disable('etag');

// connect to mongo

mongoose.connect('mongodb://localhost/Tweact');

// new nTwitter instance

var twit = new twitter(config.twitter);

// Index route

app.get('/', routes.index);

// Page routes?? hmm

app.get('/page/:page/:skip', routes.page);

// Set /public as static directory

app.use('/', express.static(__dirname + '/public/'));

// Fire up the server
var server = http.createServer(app).listen(port, function() {
   console.log('Tweact is running on port ' + port);
});

// Socket.io
var io = require('socket.io').listen(server);

// Set a stream listener for tweets matching certain tracking keywords

twit.stream('statuses/filter', { track: 'WhyIFarm, #WHYIFARM, BecksHybrids'}, function(stream) {
   streamHandler(stream, io);
});