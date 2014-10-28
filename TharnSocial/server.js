// required files
var express = require('express');
var bodyParser = require('body-parser');

// config
var app = express();
app.use(bodyParser.json());

// routes
app.get('/api/posts', function(req, res) {
    res.json([
        {
            username: 'Tharnid',
            body: 'Node Roxxors!!!'
        }
    ])
})

app.post('api/posts', function(req, res) {
    console.log('post received!!!');
    console.log(req.body.username);
    console.log('req.body.body');
    res.send(201);
})

// Server listening
app.listen(1966, function () {
    console.log('Server listening on', 1966)
})